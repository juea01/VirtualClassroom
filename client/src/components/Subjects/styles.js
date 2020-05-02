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
    padding: theme.spacing(2),

    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

export default styles;
