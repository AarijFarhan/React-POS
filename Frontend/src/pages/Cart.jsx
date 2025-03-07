import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal, removeFromCart } = useCart();

  return (
    <div className="flex justify-center items-center h-fit bg-green-100">
      <div className="p-6 h-full bg-green-100 w-full max-w-4xl">

        {cart.length === 0 ? (
          <div className="h-screen">
            <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
            <p className="mt-4 text-center">Your cart is empty.</p>
          </div>
        ) : (
          <div className="h-fit w-full">
            <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
            <div className="mt-6 space-y-4 h-fit flex flex-col justify-center items-center bg-green-100" style={{ minHeight: '70vh' }}>
              {cart.map((item) => (
                <div key={item.title} className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-xl w-full md:w-auto">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img src={item.images} alt={item.title} className="w-16 h-16 rounded-xl bg-black mr-4" />
                    <div className="w-full md:w-[400px]">
                      <h2 className="text-lg font-semibold flex flex-wrap">{item.title}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                    </div>
                  </div>
                <div className="flex"> 

                  <div className="flex items-center space-x-5 mb-4 md:mb-0">
                    <Button onClick={() => decreaseQuantity(item.title)} className="text-slate-300 rounded-xl  font-bold bg-red-600 hover:bg-red-700 hover:text-slate-50">-</Button>
                    <span className="text-lg font-bold">{item.quantity}</span>
                    <Button onClick={() => increaseQuantity(item.title)} className="text-slate-300 rounded-xl font-bold bg-green-600 hover:bg-green-700 hover:text-slate-50">+</Button>
                  </div>

                  <Button onClick={() => removeFromCart(item.title)} className="bg-red-500 hover:bg-rose-950 mx-4 hover:text-white rounded-xl">
                    Remove
                  </Button>
                </div>
                </div>
              ))}
              <div className="xl:w-[700px] text-end">
                
            <h3 className="text-right ">Total: ${calculateTotal().toFixed(2)}</h3>
            <Button type="button" className="bg-slate-400 rounded-xl hover:bg-slate-300">CheckOut</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
