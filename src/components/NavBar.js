import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="primary">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
