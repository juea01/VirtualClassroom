import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button, Grid, Divider, Typography } from "@material-ui/core";
import styles from "./styles";

class CurriculumVitae extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                Curriculum Vitae
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider variant="fullWidth" />
        <div className={classes.section2}>
          <Typography gutterBottom variant="body1">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </Typography>
        </div>
        <div className={classes.section3}>
          <Button color="primary">Edit CV</Button>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(CurriculumVitae);
