import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni" description="A classic!" image="/public/pizzas/pepperoni.webp" />
      <Pizza name="Hawaiian" description="Sweet and savory!" image="/public/pizzas/hawaiian.webp" />
      <Pizza name="Americano" description="Simple and delicious!" image="/public/pizzas/big_meat.webp" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
