'use client'

import { productState } from "@/store/product"
import { useRecoilValue } from "recoil"

interface FilterProps {
    selectedCategories: string[]
    onCategoryChange: (category: string) => void
    selectedPrices: string[]
    onPriceChange: (price: string) => void
}

const Filter = ({ selectedCategories, onCategoryChange, selectedPrices, onPriceChange }: FilterProps) => {
    const products = useRecoilValue(productState)

    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))]
    const PriceRange = ['0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '91 - 100']

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-start gap-4 mb-6">
                <div className="bg-violet-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter text-white">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold">Filter</h2>
            </div>
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                    {uniqueCategories.map((category, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={`category-${index}`}
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => onCategoryChange(category)}
                                className="form-checkbox h-5 w-5 text-violet-500 rounded"
                            />
                            <label htmlFor={`category-${index}`} className="text-gray-700">{category}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <ul className="space-y-2">
                    {PriceRange.map((price, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={`price-${index}`}
                                value={price}
                                checked={selectedPrices.includes(price)}
                                onChange={() => onPriceChange(price)}
                                className="form-checkbox h-5 w-5 text-violet-500 rounded"
                            />
                            <label htmlFor={`price-${index}`} className="text-gray-700">{price}</label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter