import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
