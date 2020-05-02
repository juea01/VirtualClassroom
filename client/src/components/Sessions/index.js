import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import {
  Grid,
  Paper,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import styles from "./styles";

class Sessions extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container xs={12} className={classes.sessions}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.sessionItem}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              JOIN SESSION
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.sessionItem}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PlayArrowSharpIcon />}
              className={classes.btn}
            >
              PLAY
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Sessions);
