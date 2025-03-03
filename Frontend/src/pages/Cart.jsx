import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";


function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const incrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            Your cart is empty.
            <Link to="/menu">
              <button className="mt-5 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">
                Back to Menu
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <Card key={item.id} className="flex items-center p-4 shadow-md">
                  {/* Product Image */}
                  <CardContent className="w-1/5">
                    <img src={item.images} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                  </CardContent>

                  {/* Product Details */}
                  <CardHeader className="w-2/5">
                    <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                    <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                  </CardHeader>

                  {/* Quantity Controls */}
                  <CardFooter className="w-2/5 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Button
                        className="bg-red-500 text-white px-3"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <Button
                        className="bg-green-500 text-white px-3"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button className="bg-gray-500 text-white px-3" onClick={() => removeFromCart(item.id)}>
                      ❌
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mt-6 p-4 border-t">
              <h2 className="text-2xl font-bold">Total:</h2>
              <h2 className="text-2xl font-bold text-green-600">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-5">
              <Link to="/menu">
                <Button className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-600">
                  Continue Shopping
                </Button>
              </Link>
              <Button className="bg-green-600 text-white px-5 py-2 hover:bg-green-700">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
