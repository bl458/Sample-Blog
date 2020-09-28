import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
    color: "#fff",
    textAlign: "center",
    padding: "0 24px",
  },
  introImgTitle: {
    fontWeight: 700,
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(3),
  },
  activity: {
    maxWidth: "100%",
    height: "100%",
  },
  activityPic: {
    height: 140,
  },
}));

const ACTIVITIES = [
  {
    title: "Coding",
    img: require("../assets/card-image-coding.jpg"),
    desc: "Time flies when I code. I want to get better.",
  },
  {
    title: "Piano",
    img: require("../assets/card-image-piano.jpg"),
    desc:
      "Piano is my fav hobby. My favorite composers are Debussy and Chopin.",
  },
  {
    title: "Sleep",
    img: require("../assets/card-image-sleep.jpg"),
    desc: "I love sleeping.",
  },
];

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />

      <Box className={classes.introImg}>
        <Typography variant="h2" className={classes.introImgTitle}>
          Byungchan's Blog
        </Typography>
      </Box>

      <Container className={classes.blogContainer}>
        <Typography variant="h5" className={classes.blogTitle}>
          My Favorite Activities
        </Typography>

        <Grid container spacing={3}>
          {ACTIVITIES.map((activity, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card className={classes.activity}>
                <CardActionArea>
                  <CardMedia
                    className={classes.activityPic}
                    image={activity.img}
                    title={activity.title}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {activity.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
