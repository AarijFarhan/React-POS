import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal, removeFromCart } = useCart();

  return (
    <>
      <div className="bg-[url(./banner.jpg)] text-center items-center h-64 flex justify-center opacity-95 bg-black tracking-widest">
        <h1 className="text-white brightness-[100px] text-5xl bg-transparent font-bold">Cart</h1>
      </div>

      <div className="flex justify-center items-center h-fit bg-green-50">
        <div className="p-6 h-full w-full max-w-4xl bg-green-50">
          {cart.length === 0 ? (
            <div className="h-screen flex flex-col items-center justify-center">
              <Card className="bg-green-100 p-6 rounded-2xl flex flex-col justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <p className="mt-4 text-center">Your cart is empty.</p>
                <Button className="mt-3">
                  <Link to="/menu" className="border rounded-3xl hover:bg-green-500 hover:text-white p-3">
                    Back To Menu
                  </Link>
                </Button>
              </Card>
            </div>
          ) : (
            <div className="h-fit w-full bg-green-50">
              <div className="mt-6 space-y-4 flex flex-col justify-center items-center bg-green-50" style={{ minHeight: "70vh" }}>
                {cart.map((item) => (
                  <Card key={item.title} className="flex flex-col md:flex-row bg-green-100 rounded-2xl p-4 w-full md:w-auto items-center justify-between">
                    {/* Item Image & Details */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                      <img src={item.images} alt={item.title} className="w-16 h-16 rounded-xl bg-black mr-4" />
                      <div className="text-center md:text-left w-full md:w-[400px]">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-600">Price: ${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity and Remove Button (Stacked in Mobile) */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 mt-3 md:mt-0">
                      <div className="flex items-center space-x-5">
                        <Button onClick={() => decreaseQuantity(item.title)} className="text-white rounded-xl font-bold bg-red-600 hover:bg-red-700">
                          -
                        </Button>
                        <span className="text-lg font-bold">{item.quantity}</span>
                        <Button onClick={() => increaseQuantity(item.title)} className="text-white rounded-xl font-bold bg-green-600 hover:bg-green-700">
                          +
                        </Button>
                      </div>

                      <Button onClick={() => removeFromCart(item.title)} className="text-white bg-red-600 hover:bg-rose-950 rounded-xl w-full md:w-auto">
                        Remove
                      </Button>
                    </div>
                    
                  </Card>
                ))}

                {/* Checkout Section */}
                <div className="w-full flex flex-col items-center md:items-end mt-4">
                  <h3 className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</h3>
                  <Button className="w-full md:w-auto text-white bg-green-500 rounded-xl hover:bg-green-600 mt-2">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
