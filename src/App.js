import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Tasty tasty",
    }),
    React.createElement(Pizza, {
      name: "Americano",
      description: "Freedon!!!",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Yum Pinapple",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
