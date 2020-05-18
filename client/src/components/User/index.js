import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Box, Grid, Paper, Avatar, Typography } from "@material-ui/core";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./styles";

class User extends Component {
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
        </Paper>
        <Paper className={classes.userProfile}>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.profileHead}
          >
            Profile Completion
          </Typography>
          <Box className={classes.progress}>
            <LinearProgress
              className={classes.progressBar}
              variant="determinate"
              value={50}
            />
            <Typography className={classes.percent}>50%</Typography>
          </Box>
          <Box className={classes.addSchool}>
            <FiberManualRecordOutlinedIcon />
            <Typography>Add your school</Typography>
            <ArrowForwardIosOutlinedIcon />
          </Box>
          <Box className={classes.joinGroup}>
            <FiberManualRecordOutlinedIcon />
            <Typography>Join a group</Typography>
            <ArrowForwardIosOutlinedIcon />
          </Box>
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles)(User);
