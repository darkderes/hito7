import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (pizza) => {
    setCarts((prevCarts) => {
      const existingCartItem = prevCarts.find(
        (cartItem) => cartItem.id === pizza.id
      );

      if (existingCartItem) {
        return prevCarts.map((cartItem) =>
          cartItem.id === pizza.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        const newCart = {
          id: pizza.id,
          img: pizza.img,
          name: pizza.name,
          price: pizza.price,
          qty: 1,
        };
        return [...prevCarts, newCart];
      }
    });
    toast.success("Pizza añadida al carrito!");
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        setCarts,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
