'use client'

import { cartItemState } from '@/store/cart';
import React from 'react';
import { useRecoilValue } from 'recoil';

const CartPage: React.FC = () => {
  const cartItems = useRecoilValue(cartItemState);

  console.log(cartItems)
  const cartData = {
    totalItems: cartItems.reduce((acc, item) => acc + (item.item_count ?? 1), 0),
    subtotal: cartItems.reduce((acc, item) => acc + item.price * (item.item_count ?? 1), 0),
    shippingCost: 10, // example value
    tax: 5, // example value
    total: cartItems.reduce((acc, item) => acc + item.price * (item.item_count ?? 1), 0) + 15, // example calculation
    promotionCode: 'SAVE20', // example value
    promotionDiscount: 20, // example value
    grandTotal: cartItems.reduce((acc, item) => acc + item.price * (item.item_count ?? 1), 0) - 20 + 15, // example calculation
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 && <div className='flex items-center justify-center'> haven't any cart item </div>}
      {cartItems.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-8 p-4 bg-white rounded-lg shadow">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-6" />
              <div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-semibold">Price: ${item.price}</p>
                  <p className="text-gray-800 font-semibold">Quantity: {item.item_count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <p className="text-gray-700">Total Items: {cartData.totalItems}</p>
            <p className="text-gray-700">Subtotal: ${cartData.subtotal}</p>
            <p className="text-gray-700">Shipping Cost: ${cartData.shippingCost}</p>
            <p className="text-gray-700">Tax: ${cartData.tax}</p>
            <p className="text-gray-700 font-semibold">Total: ${cartData.total}</p>
            {cartData.promotionCode && (
              <p className="text-gray-700">Promotion Code: {cartData.promotionCode}</p>
            )}
            {cartData.promotionDiscount > 0 && (
              <p className="text-green-600 font-semibold">Promotion Discount: -${cartData.promotionDiscount}</p>
            )}
            <p className="text-2xl font-bold">Grand Total: ${cartData.grandTotal}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>}
    </div>
  );
};

export default CartPage;
