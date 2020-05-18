const styles = (theme) => ({
  userSection: {
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
  },

  userDetail: {
    marginTop: 120,
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    width: theme.spacing(50),
    height: theme.spacing(30),
  },
  userAvatarWrap: {
    display: "flex",
    borderRadius: "50%",
    marginTop: -100,
    alignContent: "center",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  userAvatarImg: {
    width: theme.spacing(23),
    height: theme.spacing(23),
    margin: theme.spacing(1),
  },
  userInfo: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    margin: theme.spacing(2, 2, 2, 2),
  },

  userProfile: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    width: theme.spacing(50),
    height: theme.spacing(30),
    margin: theme.spacing(2, 2, 2, 2),
  },
  progress: {
    display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
  },
  progressBar: {
    borderRadius: 20,
    backgroundColor: "#BDBDBD",
    height: theme.spacing(1),
    width: theme.spacing(38),
    bottom: theme.spacing(-2),
    color: "#689F38",
  },
  profileHead: {
    marginTop: theme.spacing(3),
    fontWeight: 300,
    fontSize: 20,
  },
  percent: {
    marginLeft: theme.spacing(2),
    marginTop: 7,
  },
  addSchool: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 0),
    color: "#00BCD4",
  },
  joinGroup: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 0),
    color: "#00BCD4",
  },
});

export default styles;
