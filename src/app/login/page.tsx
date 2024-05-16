'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/product')
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);

  };

  return (
    
        <div className="flex items-center justify-center min-h-screen bg-purple-100">
          <div className="flex bg-white rounded-lg shadow-lg w-full max-w-4xl">
            <div className="w-full lg:w-1/2 p-8">
              <h1 className="text-2xl font-bold mb-4 text-center text-black">LOGIN</h1>
              <p className="text-center text-gray-600 mb-8">How to get started </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700">Username</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                >
                  Login Now
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-gray-600">Login with Others</p>
                <div className="flex space-x-4 mt-4 justify-center">
                  <button className="bg-white border border-gray-300 py-2 px-4 rounded-lg flex items-center text-black text-xs">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Login with Google
                  </button>
                  <button className="bg-white border border-gray-300 py-2 px-4 rounded-lg flex items-center text-black text-xs">
                    <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" className="mr-2" />
                    Login with Facebook
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-1/2 bg-purple-600 rounded-r-lg p-8 items-center justify-center">
              <img
              
                src="https://www.01net.com/app/uploads/2023/02/Guide-creation-e-commerce-896x596.jpg" // Replace this with any e-commerce image
                alt="E-commerce"
                className="rounded-lg mt-14"
              />
            </div>
          </div>
        </div>
      );
};

export default LoginPage;
