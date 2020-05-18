import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Box, ButtonGroup, Button } from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import EventIcon from "@material-ui/icons/Event";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import DescriptionIcon from "@material-ui/icons/Description";

const options = [
  "<GroupOutlinedIcon /> Create Groups",
  "Create Session",
  "Create Competition",
  "<DescriptionIcon/> Create Homework",
];

function DropDownButton(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          color="primary"
          ref={anchorRef}
          aria-label="split button"
        >
          {/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
          <Button>CREATE</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    <MenuItem className={classes.menuItem}>
                      <GroupOutlinedIcon />
                      &nbsp; Create Group
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <EventIcon />
                      &nbsp; Create Session
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <Brightness7Icon />
                      &nbsp; Create Competition
                    </MenuItem>

                    <MenuItem className={classes.menuItem}>
                      <DescriptionIcon />
                      &nbsp; Create Homework
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(DropDownButton);
