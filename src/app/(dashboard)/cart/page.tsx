import React from 'react';

interface CartItem {
  productId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface Cart {
  userId: number;
  cartItems: CartItem[];
  totalItems: number;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  promotionCode: string;
  promotionDiscount: number;
  grandTotal: number;
}

const cartData: Cart = {
  userId: 1234,
  cartItems: [
    {
      productId: "ABC123",
      name: "Wireless Bluetooth Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 79.99,
      quantity: 1,
      imageUrl: "https://ptron.in/cdn/shop/products/61H2AtoBZdL._SL1100.jpg?v=1632974917"
    },
    {
      productId: "XYZ789",
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps drinks cold for 24 hours",
      price: 24.99,
      quantity: 2,
      imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230419/i9gA/643f8351907deb497aefc269/-473Wx593H-466036656-pink-MODEL.jpg"
    },
    {
      productId: "DEF456",
      name: "Leather Wallet",
      description: "Stylish and durable leather wallet with multiple card slots",
      price: 39.99,
      quantity: 1,
      imageUrl: "https://rukminim2.flixcart.com/image/850/1000/ksqeky80/wallet-card-wallet/r/c/3/new-high-quality-genuine-men-s-leather-wallet-12-1-wh2055-5-original-imag68hpn7dpzvca.jpeg?q=90&crop=false"
    }
  ],
  totalItems: 3,
  subtotal: 144.97,
  shippingCost: 5.99,
  tax: 12.07,
  total: 163.03,
  promotionCode: "SUMMER20",
  promotionDiscount: 10.00,
  grandTotal: 153.03
};

const CartPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {cartData.cartItems.map((item) => (
                <div key={item.productId} className="flex items-center mb-8 p-4 bg-white rounded-lg shadow">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover mr-6" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-semibold">Price: ${item.price}</p>
                      <p className="text-gray-800 font-semibold">Quantity: {item.quantity}</p>
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
          </div>
        </div>
      );
};

export default CartPage;