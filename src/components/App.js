import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";

import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
    );
  }
}

export default App;
