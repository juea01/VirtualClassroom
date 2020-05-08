import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Grid, Paper, Box, CardMedia, Avatar } from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";

import styles from "./styles";

class Sessions extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Carousel
        animation="slide"
        indicators={false}
        className={classes.sessions}
        interval={8000}
      >
        <Grid container xs={12}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.sessionItem}>
              <Box className={classes.sessionHeader}>
                <Typography>Session</Typography>
                <Box className={classes.live}>
                  <Typography>Live now &nbsp; </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.margin}
                  >
                    24:23
                  </Button>
                </Box>
              </Box>
              <Box className={classes.sessionBody}>
                <Avatar
                  className={classes.teacherImg}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <Box className={classes.sessionInfo}>
                  <Box className={classes.sessionSubject}>
                    <CardMedia
                      className={classes.sessioSubjectImg}
                      image="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
                      title="Paella dish"
                    />
                    <Typography className={classes.sessionSubjectName}>
                      Vuejs
                    </Typography>
                  </Box>
                  <Typography>Henrry Pham</Typography>
                  <Box className={classes.rating}>
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                  </Box>
                </Box>
              </Box>

              <Typography className={classes.sessionDesc}>
                Modern React Redux Tutorial
              </Typography>

              <Box className={classes.sessionFooter}>
                <AvatarGroup max={5} className={classes.participants}>
                  <Avatar
                    className={classes.participant}
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Travis Howard"
                    src="https://bauerfrodoprod.blob.core.windows.net/uploads/999e9429-97a0-48b4-966b-b939c784e4dd-ls2217_57_sup_ashleigh-young-by-russell-kleyn_450x336.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Cindy Baker"
                    src="https://cdn.rugbypass.com/player-image.php?img=images/players/105/580x580/1843.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="https://soaps.sheknows.com/wp-content/uploads/2020/02/Lindsay-caught-with-Mariah-YR-HW.jpg?resize=1020%2C596"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  JOIN SESSION
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.sessionItem}>
              <Box className={classes.sessionHeader}>
                <Typography>Session</Typography>
                <Box className={classes.live}>
                  <Typography>Live now &nbsp; </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.margin}
                  >
                    24:23
                  </Button>
                </Box>
              </Box>
              <Box className={classes.sessionBody}>
                <Avatar
                  className={classes.teacherImg}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <Box className={classes.sessionInfo}>
                  <Box className={classes.sessionSubject}>
                    <CardMedia
                      className={classes.sessioSubjectImg}
                      image="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
                      title="Paella dish"
                    />
                    <Typography className={classes.sessionSubjectName}>
                      Reactjs
                    </Typography>
                  </Box>
                  <Typography>Henrry Pham</Typography>
                  <Box className={classes.rating}>
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                  </Box>
                </Box>
              </Box>

              <Typography className={classes.sessionDesc}>
                Modern React Redux Tutorial
              </Typography>

              <Box className={classes.sessionFooter}>
                <AvatarGroup max={5} className={classes.participants}>
                  <Avatar
                    className={classes.participant}
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Travis Howard"
                    src="https://bauerfrodoprod.blob.core.windows.net/uploads/999e9429-97a0-48b4-966b-b939c784e4dd-ls2217_57_sup_ashleigh-young-by-russell-kleyn_450x336.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Cindy Baker"
                    src="https://cdn.rugbypass.com/player-image.php?img=images/players/105/580x580/1843.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="https://soaps.sheknows.com/wp-content/uploads/2020/02/Lindsay-caught-with-Mariah-YR-HW.jpg?resize=1020%2C596"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  JOIN SESSION
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.sessionItem}>
              <Box className={classes.sessionHeader}>
                <Typography>Session</Typography>
                <Box className={classes.live}>
                  <Typography>Live now &nbsp; </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.margin}
                  >
                    24:23
                  </Button>
                </Box>
              </Box>
              <Box className={classes.sessionBody}>
                <Avatar
                  className={classes.teacherImg}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <Box className={classes.sessionInfo}>
                  <Box className={classes.sessionSubject}>
                    <CardMedia
                      className={classes.sessioSubjectImg}
                      image="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
                      title="Paella dish"
                    />
                    <Typography className={classes.sessionSubjectName}>
                      Reactjs
                    </Typography>
                  </Box>
                  <Typography>Henrry Pham</Typography>
                  <Box className={classes.rating}>
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                  </Box>
                </Box>
              </Box>

              <Typography className={classes.sessionDesc}>
                Modern React Redux Tutorial
              </Typography>

              <Box className={classes.sessionFooter}>
                <AvatarGroup max={5} className={classes.participants}>
                  <Avatar
                    className={classes.participant}
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Travis Howard"
                    src="https://bauerfrodoprod.blob.core.windows.net/uploads/999e9429-97a0-48b4-966b-b939c784e4dd-ls2217_57_sup_ashleigh-young-by-russell-kleyn_450x336.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Cindy Baker"
                    src="https://cdn.rugbypass.com/player-image.php?img=images/players/105/580x580/1843.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="https://soaps.sheknows.com/wp-content/uploads/2020/02/Lindsay-caught-with-Mariah-YR-HW.jpg?resize=1020%2C596"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  JOIN SESSION
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.sessionItem}>
              <Box className={classes.sessionHeader}>
                <Typography>Session</Typography>
                <Box className={classes.live}>
                  <Typography>Live now &nbsp; </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.margin}
                  >
                    24:23
                  </Button>
                </Box>
              </Box>
              <Box className={classes.sessionBody}>
                <Avatar
                  className={classes.teacherImg}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <Box className={classes.sessionInfo}>
                  <Box className={classes.sessionSubject}>
                    <CardMedia
                      className={classes.sessioSubjectImg}
                      image="https://cdn.iconscout.com/icon/free/png-512/react-2-458175.png"
                      title="Paella dish"
                    />
                    <Typography className={classes.sessionSubjectName}>
                      Reactjs
                    </Typography>
                  </Box>
                  <Typography>Henrry Pham</Typography>
                  <Box className={classes.rating}>
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                    <StarRateIcon className={classes.startIcon} />
                  </Box>
                </Box>
              </Box>

              <Typography className={classes.sessionDesc}>
                Modern React Redux Tutorial
              </Typography>

              <Box className={classes.sessionFooter}>
                <AvatarGroup max={5} className={classes.participants}>
                  <Avatar
                    className={classes.participant}
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Travis Howard"
                    src="https://bauerfrodoprod.blob.core.windows.net/uploads/999e9429-97a0-48b4-966b-b939c784e4dd-ls2217_57_sup_ashleigh-young-by-russell-kleyn_450x336.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Cindy Baker"
                    src="https://cdn.rugbypass.com/player-image.php?img=images/players/105/580x580/1843.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="https://soaps.sheknows.com/wp-content/uploads/2020/02/Lindsay-caught-with-Mariah-YR-HW.jpg?resize=1020%2C596"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    className={classes.participant}
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  JOIN SESSION
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Carousel>
    );
  }
}

export default withStyles(styles)(Sessions);
