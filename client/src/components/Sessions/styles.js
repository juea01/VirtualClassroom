import { Children } from "react";

const styles = (theme) => ({
  sessions: {
    // display: "flex",
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    background: "#FFFFFF",
    border: "#9E9E9E",
    borderRadius: 4,
  },

  sessionItem: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    width: theme.spacing(48),
    height: theme.spacing(35),
    background:
      "linear-gradient(to bottom, rgba(255, 214, 214, 1) 5%, rgba(255, 229, 229, 1) 10%, rgba(255, 255, 255, 1) 30%)",
  },
  sessionHeader: {
    display: "flex",
  },
  live: {
    display: "flex",
    marginLeft: theme.spacing(18),
  },
  sessionBody: {
    display: "flex",
    padding: theme.spacing(1),
  },

  teacherImg: {
    width: 80,
    height: 80,
  },
  teacher: {
    padding: theme.spacing(2),
  },
  rating: {
    marginLeft: theme.spacing(-1),
  },
  startIcon: {
    color: "#FFC107",
  },
  sessionInfo: {
    paddingLeft: theme.spacing(2),
  },
  sessionSubject: {
    display: "flex",
  },
  sessioSubjectImg: {
    width: 35,
    height: 0,
    paddingTop: "38.25%",
  },
  sessionSubjectName: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },

  sessionDesc: {
    paddingLeft: theme.spacing(1),
  },
  sessionFooter: {
    display: "flex",
    margin: theme.spacing(3, 2, 1, 2),
  },

  participants: {
    margin: theme.spacing(0, 2, 1, 0),
  },

  participant: {
    width: 32,
    height: 32,
  },
  btn: {
    margin: theme.spacing(0, 0, 1, 1),
    position: "relative",
  },
});

export default styles;
