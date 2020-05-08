const styles = (theme) => ({
  subjectList: {
    diplay: "flex",
    padding: theme.spacing(2, 2, 2, 2),
  },

  subjectGroup: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(12),
    },
  },

  subjectItem: {
    padding: theme.spacing(1),

    textAlign: "center",
    color: theme.palette.text.secondary,

    alignItems: "center",
    flexDirection: "column",
    display: "flex",
  },
  subjectImage: {
    width: 50,

    height: 50,
    // marginLeft: theme.spacing(2.1),
    // paddingTop: "56.25%",
  },
  subjectTitle: {
    // marginTop: theme.spacing(2),
  },
});

export default styles;
