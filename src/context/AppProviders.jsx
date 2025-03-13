import { CartProvider } from "./CartContext";
import { PizzaProvider } from "./PizzaContext";

const AppProviders = ({ children }) => {
  return (
    <CartProvider>
      <PizzaProvider>{children}</PizzaProvider>
    </CartProvider>
  );
};

export default AppProviders;
