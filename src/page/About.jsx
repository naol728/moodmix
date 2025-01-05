import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export default function About() {
  return (
    <div>
      <TracingBeam className="px-6">
        <Container maxWidth="sm" className="flex justify-around flex-col h-dvh">
          <Box className="mt-10">
            <Typography
              variant="h4"
              className="text-accent  font-extrabold  "
              component="h1"
              mb={2}
            >
              About MoodMix
            </Typography>
            <Typography
              variant="h6"
              className="leading-relaxed my-5 text-lg"
              component="p"
            >
              MoodMix is designed to elevate your music experience by curating
              playlists and tunes that perfectly match your mood and activities.
              Whether you're feeling upbeat, mellow, or need a burst of energy,
              MoodMix has got you covered.
            </Typography>
          </Box>

          <Box mt={3}>
            <Typography
              variant="h4"
              className="text-green-400  font-extrabold mb-4"
              component="h1"
              mb={2}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="leading-relaxed my-5 text-lg"
            >
              At MoodMix, our mission is to connect people with music that
              resonates with their emotions and enhances their moments. We
              believe that music is a powerful tool for self-expression,
              relaxation, and motivation. With our innovative mood-based
              recommendations, we strive to make every listening session
              memorable and meaningful.
            </Typography>
          </Box>

          <Box mt={3}>
            <Typography
              variant="h4"
              className="text-yellow-300  font-extrabold mb-4"
              component="h1"
              mb={2}
            >
              Key Features
            </Typography>
            <ul className="flex flex-col justify-around text-lg items-center ">
              <li>
                <span className="font-extrabold text-text">
                  😃Mood-Based Playlists:
                </span>
                Select your mood, and MoodMix will create the perfect playlist
                tailored to your feelings.
              </li>
              <li>
                <span className="font-extrabold text-text">
                  🧏Activity Recommendations:
                </span>{" "}
                Get music suggestions for activities like studying, working out,
                or relaxing.
              </li>
              <li>
                <span className="font-extrabold text-text">
                  🤯Personalized Experience:{" "}
                </span>
                Discover new tracks and artists based on your preferences and
                listening habits.
              </li>
            </ul>
          </Box>
          <Box mt={3}>
            <Typography
              variant="h4"
              className="text-teal-500  font-extrabold  mb-4"
              component="h3"
              mb={2}
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="leading-relaxed my-5 text-lg"
            >
              MoodMix was built by a passionate team of developers, music
              enthusiasts, and designers who understand the profound impact of
              music on everyday life. We're dedicated to bringing joy, comfort,
              and energy to your life through the art of sound.
              <div className="text-center my-10 flex items-center justify-center">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/143317388?s=400&u=fa1626c14a9dab6d23567e65f571b388c21335c9&v=4"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  src="https://avatars.githubusercontent.com/u/119611471?v=4"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  src="https://avatars.githubusercontent.com/u/162048442?v=4"
                  sx={{ width: 56, height: 56 }}
                />
              </div>
            </Typography>
          </Box>
          <Box className="flex justify-center items-center font-mono font-lg mb-20">
            <Typography>Contact us{"    "}</Typography>
            <Typography>
              <a href="mailto:naolmeseret22@gmail.com">
                naolmeserert22@gmail.com{" "}
              </a>
            </Typography>
          </Box>
        </Container>
      </TracingBeam>
    </div>
  );
}
