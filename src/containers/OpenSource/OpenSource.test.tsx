import React from "react";
import ReactDOM from "react-dom";
import OpenSource from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OpenSource />, div);
  ReactDOM.unmountComponentAtNode(div);
});
