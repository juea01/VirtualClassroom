import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import TeacherNavBar from "../../../components/TeacherNavBar";

class TeacherLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;

    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <TeacherNavBar {...remainProps}>
              <YourComponent {...routeProps} />
            </TeacherNavBar>
          );
        }}
      />
    );
  }
}

TeacherLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};
export default TeacherLayoutRoute;
