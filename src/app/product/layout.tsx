'use client'
import { useRecoilState } from "recoil"
import Filter from "../(components)/filter"
import Navber from "../(components)/navber"
import { useEffect, useState } from "react"
import { productState } from "@/store/product"
import axios from "axios"
import ProductPage from "./page"

export default function ProductLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const [products, setProducts] = useRecoilState(productState)
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedPrices, setSelectedPrices] = useState<string[]>([])
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        if (response.status === 200) {
            const data = response.data
            setProducts(data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter(cat => cat !== category)
                : [...prevSelectedCategories, category]
        )
    }
    const handlePriceChange = (price: string) => {
        setSelectedPrices(prevSelectedPrice =>
            prevSelectedPrice.includes(price)
                ? prevSelectedPrice.filter(item => item !== price)
                : [...prevSelectedPrice, price]
        )
    }
    return (
        <section className="relative">
            <div className="fixed w-full top-0 z-10">
                <Navber />
            </div>
            <div className="flex mt-10 ">
                <div className="w-[20%] border-r-2 fixed min-h-screen top-24">
                    <Filter
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        selectedPrices={selectedPrices}
                        onPriceChange={handlePriceChange}
                    />
                </div>
                <div className="w-[80%] absolute left-[20%] top-14">
                    <ProductPage
                        products={products}
                        selectedCategories={selectedCategories}
                        selectedPrices={selectedPrices}
                    />
                </div>

            </div>

        </section>
    )
}