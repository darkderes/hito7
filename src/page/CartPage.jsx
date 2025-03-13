import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  // ocupar el context para obtener el carrito
  const { carts, setCarts } = useContext(CartContext);

  const increaseQuantity = (id) => {
    setCarts(
      carts.map((pizza) =>
        pizza.id === id ? { ...pizza, qty: pizza.qty + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCarts(
      carts
        .map((pizza) =>
          pizza.id === id ? { ...pizza, qty: pizza.qty - 1 } : pizza
        )
        .filter((pizza) => pizza.id !== id || pizza.qty > 0)
    );
  };

  const total = carts.reduce((acc, pizza) => acc + pizza.price * pizza.qty, 0);

  return (
    <div className=" d-flex align-items-center d-flex flex-column">
      <h2 className="my-5">Detalles del pedido:</h2>
      <ul>
        {carts.map((pizza) => (
          <li key={pizza.id} className="mb-3 d-flex align-items-center">
            <img
              src={pizza.img}
              alt={pizza.name}
              width="100"
              height="100"
              className="me-3 rounded"
            />
            <div className="d-flex flex-column flex-grow-1">
              <p className="fs-4 mb-1 me-5 fw-bold">{pizza.name}</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="fs-4 mb-1 me-4">${pizza.price.toLocaleString()}</p>
              <button
                className="btn btn-outline-danger"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                -
              </button>
              <span className="mx-2">{pizza.qty}</span>
              <button
                className="btn btn-outline-info"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between w-10 my-3">
        <h3 className="fs-2 me-4">Total: ${total.toLocaleString()}</h3>
        <button className="btn btn-dark btn-lg">Pagar</button>
      </div>
    </div>
  );
};

export default CartPage;
