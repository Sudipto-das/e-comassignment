'use client'

import { Product } from "@/store/product"
import { useState } from "react"
import DetailsPage from "../../(components)/details"


interface ProductPageProps {
    products: Product[]
    selectedCategories: string[]
    selectedPrices: string[]
}

const ProductPage = ({ products, selectedCategories, selectedPrices }: ProductPageProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const handleViewDetails = (productId: string) => {
        const item = products.find((product => product.id === productId))
        if (item) {
            setSelectedProduct(item)
            setShowModal(true)
        }

    }

    const filterProducts = (products: Product[]) => {
        return products.filter(product => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
            const priceMatch = selectedPrices.length === 0 || selectedPrices.some(priceRange => {
                const [min, max] = priceRange.split(' - ').map(Number)
                return product.price >= min && product.price <= max
            })
            const searchMatch = searchTerm.length === 0 ||
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && priceMatch && searchMatch
        })
    }

    const filteredProducts = filterProducts(products)

    return (
        <div className="px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                <h1 className="font-bold text-2xl mb-4">Product List ({filteredProducts.length})</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border border-gray-300 rounded-full"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-700">{product.price}₹</p>
                        <p className="text-yellow-500">Rating: {product.rating?.rate ?? "N/A"}</p>
                        <div className="flex gap-5">
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to cart</button>
                            <button className="mt-2 px-4 py-2 bg-purple-300  text-black rounded" onClick={() => handleViewDetails(product.id)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && <DetailsPage selectedProduct={selectedProduct} onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default ProductPage