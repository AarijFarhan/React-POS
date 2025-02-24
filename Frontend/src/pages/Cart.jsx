import React from 'react'
import { useState } from 'react';
import { Trash2 } from "lucide-react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 120, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Smart Watch", price: 90, quantity: 2, image: "https://via.placeholder.com/100" },
  ]);



  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };


  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
     <Card className='my-20 w-full sm:w-80 justify-center mx-auto '>
     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold">${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
                    </Card>
    
    </>
  )
}

export default Cart