'use client'
import { useRecoilState } from "recoil"
import Filter from "../../(components)/filter"
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
    const [isFilterOpen, setIsFilterOpen] = useState(false)

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

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen)
    }
    const closeFilter = ()=>{
        setIsFilterOpen(false)
    }

    return (
        <section className="relative">
            <div className="flex mt-10">
                {/* Filter button for small devices */}
                <button
                    className="md:hidden fixed top-24 left-4 z-10 bg-violet-500 text-white px-3 py-1 rounded"
                    onClick={toggleFilter}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>

                {/* Filter sidebar */}
                <div
                    className={`fixed top-24 left-0 z-20 w-full md:w-[15%] border-r-2 bg-white min-h-screen transition-transform duration-300 ease-in-out transform ${
                        isFilterOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
                >
                     <button
                        className="md:hidden absolute top-8 right-4 bg-violet-500 text-white px-2 py-1 rounded"
                        onClick={toggleFilter}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    </button>
                    <Filter
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        selectedPrices={selectedPrices}
                        onPriceChange={handlePriceChange}
                    />
                </div>

                {/* Product page */}
                <div className="w-full md:w-[80%] md:ml-[18%] mt-14">
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