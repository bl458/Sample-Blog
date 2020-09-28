import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";

import theme from "../styles/theme";

import Blog from "./Blog";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Blog />
      </ThemeProvider>
    );
  }
}

export default App;
