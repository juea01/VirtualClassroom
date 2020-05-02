import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import styles from "./styles";
import Subjects from "../../../components/Subjects";
import Sessions from "../../../components/Sessions";
import User from "../../../components/User";

class StudentBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.studentBoard}>
        {/* <div className={classes.shape}>REact</div>
        <div className={classes.shape}>REact</div>
        <div className={classes.shape}>REact</div> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <User />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Subjects />
            <Sessions />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StudentBoard);
