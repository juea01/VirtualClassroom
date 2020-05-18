import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import StudentNavBar from "../../../components/StudentNavbar";

class StudentLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;

    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <StudentNavBar {...remainProps}>
              <YourComponent {...routeProps} />
            </StudentNavBar>
          );
        }}
      />
    );
  }
}

StudentLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};
export default StudentLayoutRoute;
