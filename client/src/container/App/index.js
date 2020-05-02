import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import styles from "./styles";

import StudentBoard from "./../StudentBoard";

import theme from "./../../commons/Theme";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StudentBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
