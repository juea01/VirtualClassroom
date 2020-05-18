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
    height: theme.spacing(50),
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

  bottom: {
    display: "flex",
    "& p": {
      margin: theme.spacing(1.5),
    },
  },
});

export default styles;
