import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";

import Blog from "./Blog";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Blog />
      </ThemeProvider>
    );
  }
}

export default App;
