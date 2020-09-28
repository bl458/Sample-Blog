import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  introImg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), 
      url(${require("../assets/background-image-bridge.jpg")})`,
    height: "500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    color: "#fff",
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(3),
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />

      <Box className={classes.introImg}>React Blog</Box>

      <Container className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            Hi
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            Hi
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            Hi
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            Hi
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
