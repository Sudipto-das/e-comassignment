'use client'

import { productState } from "@/store/product"
import { useRecoilValue } from "recoil"


interface FilterProps {
    selectedCategories: string[]
    onCategoryChange: (category: string) => void
    selectedPrices: string[]
    onPriceChange: (price: string) => void
}
const Filter = ({selectedCategories,onCategoryChange,selectedPrices,onPriceChange}:FilterProps) => {
    const products = useRecoilValue(productState)
   
    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))]
    const PriceRange = ['0 - 10','11 - 20','21 - 30','31 - 40','41 - 50','51 - 60','61 - 70','71 - 80','91 - 100']
  

    return (
        <>
        <div className="flex items-center justify-center gap-6">
            <div className=" bg-violet-200 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
            </div>
            <h1 className=" text-lg">Filter</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="mb-3 font-bold underline ">Categories</h1>
            <ul>
                {uniqueCategories.map((category, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id={`category-${index}`}
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => onCategoryChange(category)}
                        />
                        <label htmlFor={`category-${index}`} className="text-sm">{category}</label>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="mb-3 font-bold underline ">Price</h1>
            <ul>
                {PriceRange.map((price, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id={`category-${index}`}
                            value={price}
                            checked={selectedPrices.includes(price)}
                            onChange={() => onPriceChange(price)}
                        />
                        <label htmlFor={`price-${index}`} className="text-sm">{price}</label>
                    </li>
                ))}
            </ul>
        </div>

    </>
    )
}

export default Filter
