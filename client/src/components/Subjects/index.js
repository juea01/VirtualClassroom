import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";

import styles from "./styles";

const subjects = [
  {
    name: "Reactjs",
    image: "https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png",
  },
  {
    name: "Vuejs",
    image: "https://vuejs.org/images/logo.png",
  },
  {
    name: "Nodejs",
    image:
      "https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg",
  },
  {
    name: "Javascript",
    image:
      "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
  },
  {
    name: "Python",
    image: "https://hackaday.com/wp-content/uploads/2019/09/python-logo.png",
  },
  {
    name: "Laravel",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
  },
];

class Subjects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container xs={12} className={classes.subjectList}>
        <Grid item xs={12} sm={6} className={classes.subjectGroup}>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Reactjs</Typography>
          </Card>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://vuejs.org/images/logo.png"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Vuejs</Typography>
          </Card>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Nodejs</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subjectGroup}>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Javascript</Typography>
          </Card>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://hackaday.com/wp-content/uploads/2019/09/python-logo.png"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Python</Typography>
          </Card>
          <Card className={classes.subjectItem}>
            <CardMedia
              className={classes.subjectImage}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
              title="Paella dish"
            />

            <Typography className={classes.subjectTitle}>Laravel</Typography>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Subjects);
