import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provide the Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart (Increase Quantity if Already Exists)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  //  Increase Quantity
  const increaseQuantity = (title) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity (Ensure It Doesn't Go Below 1)
  const decreaseQuantity = (title) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  // Remove Only One Item (Not the Whole Cart)
  const removeFromCart = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Use Context Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
