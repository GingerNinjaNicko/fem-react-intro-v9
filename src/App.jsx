import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepperoni" description="A classic!" />
      <Pizza name="Margherita" description="Simple and delicious!" />
      <Pizza name="Hawaiian" description="Sweet and savory!" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
