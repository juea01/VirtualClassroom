const styles = (theme) => ({
  userSection: {},
  userInfo: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: theme.spacing(50),
    height: theme.spacing(30),
    margin: theme.spacing(2, 2, 2, 2),
  },
  userProfile: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: theme.spacing(50),
    height: theme.spacing(30),
    margin: theme.spacing(2, 2, 2, 2),
  },

  progressBar: {
    margin: theme.spacing(1),
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
    height: 10,
    bottom: theme.spacing(-2),
  },
  profileHead: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
  },
});

export default styles;
