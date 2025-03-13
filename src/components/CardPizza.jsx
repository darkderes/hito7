import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const CardPizza = ({ id, name, img, price, ingredients }) => {
  const { setCarts } = useContext(CartContext);
  const notify = () => toast.success("Pizza añadida al carrito!");

  const handleAddToCart = () => {
    setCarts((prevCarts) => {
      const existingCartItem = prevCarts.find((cartItem) => cartItem.id === id);

      if (existingCartItem) {
        return prevCarts.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      } else {
        const newCart = {
          id: id,
          img: img,
          name: name,
          price: price,
          qty: 1,
        };
        return [...prevCarts, newCart];
      }
    });
    notify();
  };

  return (
    <>
      <Card className="card-pizza">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">Pizza {name}</Card.Title>
          <hr />
        </Card.Body>
        <Card.Body>
          <Card.Text className="text-center fs-3">Ingredientes:</Card.Text>
          {/* <p className="text-center fs-3">Ingredientes:</p> */}
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <Card.Text className="text-center fw-bold fs-5 mb-0">
            Precio: ${price.toLocaleString()}
          </Card.Text>
        </Card.Body>

        <Card.Body className="d-flex justify-content-between">
          <Button variant="outline-dark" className="flex-grow-1 me-2">
            Ver mas <FaEye />
          </Button>
          <Button
            variant="dark"
            className="flex-grow-1"
            onClick={handleAddToCart}
          >
            Añadir <FaShoppingCart />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;
