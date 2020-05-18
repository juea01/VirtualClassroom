import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Teacher from "./../../components/Teacher";
import CurriculumVitae from "./../../components/CurriculumVitae";

class TeacherBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.studentBoard}>
        <Grid container spacing={0}>
          <Teacher />
          <Grid container xs={12} sm={8}>
            <CurriculumVitae />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(TeacherBoard);
