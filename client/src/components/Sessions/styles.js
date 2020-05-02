const styles = (theme) => ({
  sessions: {
    display: "flex",
    margin: theme.spacing(3),
    background: "#FFFFFF",
    border: "#9E9E9E",
    borderRadius: 4,
  },

  sessionItem: {
    margin: theme.spacing(7),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: theme.spacing(40),
    height: theme.spacing(30),
    background:
      "linear-gradient(to bottom, rgba(255, 214, 214, 1) 5%, rgba(255, 229, 229, 1) 10%, rgba(255, 255, 255, 1) 30%)",
  },
  btn: {
    margin: theme.spacing(23, 2, 1, 18), // You might not need this now
    position: "relative",
  },
});

export default styles;
