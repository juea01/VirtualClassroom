import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import {
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  Link,
  Divider,
} from "@material-ui/core";

import StarRateIcon from "@material-ui/icons/StarRate";

import styles from "./styles";

class Teacher extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={4} className={classes.userSection}>
        <Paper className={classes.userDetail}>
          <Paper className={classes.userAvatarWrap}>
            <Avatar
              className={classes.userAvatarImg}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
          </Paper>
          <Box className={classes.userInfo}>
            <Typography>Henry Pham</Typography>
            <Typography>Grad 9</Typography>
          </Box>
          <Link>Add your school</Link>
          <Box className={classes.rating}>
            <StarRateIcon className={classes.startIcon} />
            <StarRateIcon className={classes.startIcon} />
            <StarRateIcon className={classes.startIcon} />
            <StarRateIcon className={classes.startIcon} />
            <StarRateIcon className={classes.startIcon} />
          </Box>
          {/* <Divider
            orientation="horizontal"
            flexItem
            component="div"
            className={classes.divider}
          /> */}
          <Divider variant="fullWidth" />
          ------------------------------
          <Box className={classes.bottom}>
            <Typography>Your school students</Typography>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Typography>Live class conducted</Typography>
          </Box>
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles)(Teacher);
