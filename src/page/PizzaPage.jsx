import { useEffect, useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
const PizzaPage = () => {
  const { pizzas, fetchPizzas } = useContext(PizzaContext);

  useEffect(() => {
    fetchPizzas("http://localhost:5000/api/pizzas/p001");
  }, [fetchPizzas]);

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-title text-center mb-5 ">Pizza {pizzas.name}</h1>
        <img
          className="card-img-top pizza-image mx-auto d-block"
          src={pizzas.img}
          alt={pizzas.name}
        />
        <div className="card-body">
          <p className="card-text mx-3">{pizzas.desc}</p>
          <h2 className="text-center">Ingredientes:</h2>
          {pizzas.ingredients && (
            <ul className="list-group list-group-flush">
              {pizzas.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item text-center">
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
          <div className="d-flex justify-content-end align-items-center mt-3">
            <p className="card-text text-danger fs-2 mx-3 mb-0">
              $ {pizzas.price ? pizzas.price.toLocaleString() : ""}
            </p>
            <button className="btn btn-dark">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
