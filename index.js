import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");

// heading.innerHTML = "Hello World!";

// const root = document.getElementById("root");

// root.appendChild(heading);

//console.log("working...");

// const title = React.createElement(
//   "div",
//   {
//     id: "title",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         id: "heading1",
//       },
//       "Heading1"
//     ),
//     React.createElement(
//       "h1",
//       {
//         id: "heading2",
//       },
//       "Heading2"
//     ),
//     React.createElement(
//       "h1",
//       {
//         id: "heading3",
//       },
//       "Heading3"
//     ),
//   ]
// );
const Coc = () => (
  <div>
    <h1>Composition of Component</h1>
  </div>
);
const Title = () => {
  return (
    <div id="title">
      <h1 key="1" id="heading1">
        Heading1
      </h1>
      <h1 key="2" id="heading2">
        Heading2
      </h1>
      <h1 key="3" id="heading3">
        Heading3
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
