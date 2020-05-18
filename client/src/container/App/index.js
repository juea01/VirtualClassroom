import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./styles";

import { ADMIN_ROUTES, STUDENT_ROUTES, TEACHER_ROUTES } from "../../constants";
import StudentLayoutRoute from "./../../commons/Layout/StudentLayoutRoute";
import TeacherLayoutRoute from "./../../commons/Layout/TeacherLayoutRoute";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";

import theme from "./../../commons/Theme";

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }
  renderStudentRoutes() {
    let xhtml = null;
    xhtml = STUDENT_ROUTES.map((route) => {
      return (
        <StudentLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  renderTeacherRoutes() {
    let xhtml = null;
    xhtml = TEACHER_ROUTES.map((route) => {
      return (
        <TeacherLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            {this.renderAdminRoutes()}
            {this.renderStudentRoutes()}
            {this.renderTeacherRoutes()}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
