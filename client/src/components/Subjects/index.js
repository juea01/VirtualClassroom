import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { Grid, Paper, Typography } from "@material-ui/core";

import styles from "./styles";

class Subjects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container xs={12} className={classes.subjectList}>
        <Grid item xs={12} sm={6} className={classes.subjectGroup}>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subjectGroup}>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
          <Paper className={classes.subjectItem}>
            <Typography>Math</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Subjects);
