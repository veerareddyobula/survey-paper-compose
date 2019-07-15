import React from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./index";

describe("/survey/home -- HomeContainer", function() {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomeContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
