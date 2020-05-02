import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Grid, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./styles";

class User extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={4} className={classes.userSection}>
        <Paper className={classes.userInfo}>User</Paper>
        <Paper className={classes.userProfile}>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.profileHead}
          >
            Profile Completion
          </Typography>

          <LinearProgress
            className={classes.progressBar}
            variant="determinate"
            color="secondary"
            value={50}
          />
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles)(User);
