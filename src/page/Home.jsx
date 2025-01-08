import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Authcontext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  heroText: {
    marginBottom: 20,
    fontSize: "3rem",
  },
  heroImage: {
    maxWidth: "100%",
    height: "500px",
    borderRadius: 20,
  },
  heroButton: {
    marginTop: 5,
    backgroundColor: "#00B0FF",
    "&:hover": {
      backgroundColor: "#007bb2",
    },
  },
}));

export function Home() {
  const { currentuser, islogedin } = useAuth();
  const images = [
    "hero2.jpg",
    "hero3.jpg",
    "hero8.jpg",
    "hero9.jpg",
    "hero7.jpg",
    "hero.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (!islogedin) {
      navigate("/");
    }
  }, [islogedin, navigate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);
  if (!islogedin) {
    return <Navigate to="/" />;
  }

  return (
    <Box className={classes.heroContainer}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              className={classes.heroText}
            >
              Welcome to MoodMix app
              <span style={{ color: "#00B0FF", textAlign: "center" }}>
                {" "}
                <TypewriterEffectSmooth
                  words={[
                    {
                      text: currentuser.displayName
                        ? currentuser.displayName.toUpperCase().split(" ")[0]
                        : currentuser.email,
                    },
                  ]}
                />
              </span>
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ color: "#E0E0E0" }}
            >
              Whether you're feeling upbeat, relaxed, or nostalgic, MoodMixer
              curates personalized music recommendations to match your emotions.
              Simply tell us how you're feeling, and we'll generate a custom
              playlist just for you!
            </Typography>
            <Link to="/dialog">
              <Button
                variant="contained"
                color="white"
                size="large"
                sx={{ backgroundColor: "#00B0FF", color: "white" }}
                className={classes.heroButton}
              >
                Get Started
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={currentImage}
              alt="hero image"
              className={classes.heroImage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
