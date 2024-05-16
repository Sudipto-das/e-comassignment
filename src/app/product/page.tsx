'use client'

import { productState } from "@/store/product"
import axios from "axios"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
const ProductPage = () => {
    const [products, setProducts] = useRecoilState(productState)
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
    return (
        <div className="px-6">
            <h1 className="font-bold text-2xl mb-4">Product List ({products.length})</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-700">{product.price}₹</p>
                        <p className="text-yellow-500">Rating: {product.rating?.rate ?? "N/A"}</p>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductPage