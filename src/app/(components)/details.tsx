import { Product } from "@/store/product";
import { useState } from "react";

interface DetailsPageProps {
    onClose: () => void;
    selectedProduct: Product | null
}

const DetailsPage = ({ onClose, selectedProduct }: DetailsPageProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {selectedProduct && (
                    <div>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-48 object-contain mb-4 rounded-md" />
                        <h1 className="text-xl font-semibold mb-2">{selectedProduct.title}</h1>
                        <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-700">Price: {selectedProduct.price}₹</p>
                            <p className="text-yellow-500">Rating: {selectedProduct.rating?.rate ?? "N/A"}</p>
                        </div>
                        <button  className="block w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">Add Cart</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailsPage;
