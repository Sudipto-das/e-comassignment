'use client'

import { Product } from "@/store/product"

interface ProductPageProps {
    products: Product[]
    selectedCategories: string[]
    selectedPrices: string[]
}

const ProductPage = ({ products, selectedCategories, selectedPrices }: ProductPageProps) => {
    const filterProducts = (products: Product[]) => {
        return products.filter(product => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
            const priceMatch = selectedPrices.length === 0 || selectedPrices.some(priceRange => {
                const [min, max] = priceRange.split(' - ').map(Number)
                return product.price >= min && product.price <= max
            })
            return categoryMatch && priceMatch
        })
    }

    const filteredProducts = filterProducts(products)

    return (
        <div className="px-6">
            <h1 className="font-bold text-2xl mb-4">Product List ({filteredProducts.length})</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
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
    )
}

export default ProductPage
