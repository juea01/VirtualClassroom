import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import User from "./../../components/User";
import Subject from "./../../components/Subjects";
import Session from "./../../components/Sessions";
import NavBar from "./../../components/NavBar";

class StudentBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.studentBoard}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>

          <User />

          <Grid container xs={12} sm={8}>
            <Subject />
            <Session />
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StudentBoard);
