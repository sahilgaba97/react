// const heading = document.createElement("h1");

// heading.innerHTML = "Hello World!";

// const root = document.getElementById("root");

// root.appendChild(heading);

//console.log("working...");

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Heading1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
  },
  "Heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  heading1,
  heading2
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
