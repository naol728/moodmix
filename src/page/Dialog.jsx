import React, { useEffect, useState } from "react";
import { useMusic } from "../context/Musiccontext";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Grid, Box, Typography, Container, TextField } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import Loading from "../components/Loading";

export default function Dialog() {
  const [usermood, setUsermood] = useState("");
  const { handlegenerate, isloading, setIsloading } = useMusic();
  const { islogedin, currentuser } = useAuth();
  const navigate = useNavigate();

  const url = "https://copilot5.p.rapidapi.com/copilot";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "4ca82cfd70msh8633c610962ffc6p1a5a51jsn08efc1ec5f44",
      "x-rapidapi-host": "copilot5.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `The user is feeling: '${usermood}' Based on the available Spotify categories, suggest the best match for their mood from the following options: Pop, Slow, Upbeat Pop, Dance, Blues, Acoustic, Electronic, Rock, Hip-hop, Chill, Ambient, Lofi-beat, R&B, Classical, Heavy Metal. Provide only one category that best matches this mood.dont give me an explanation only the music catagory`,
      conversation_id: null,
      tone: "BALANCED",
      markdown: false,
      photo_url: null,
    }),
  };

  async function fectchdata() {
    console.log("fetching musics based on your prompot ");
    try {
      setIsloading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      handlegenerate(result.data.message);
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  }

  useEffect(() => {
    if (!islogedin) {
      navigate("/");
    }
  }, [islogedin, navigate]);

  if (!islogedin) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      {isloading ? <Loading /> : <></>}
      <Typography
        variant="h5"
        className=" mt-0 sm:mt-3 font-bold "
        color="#E0E0E0"
        component="h1"
        textAlign="center"
      >
        {" "}
        How do you feel {""}
        {currentuser.displayName
          ? currentuser.displayName.toUpperCase().split(" ")[0]
          : currentuser.email}{" "}
        😀
      </Typography>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#FFD700]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("dance")}
            >
              <Typography variant="h3" className="text-sm" gutterBottom>
                😊🎉
              </Typography>
              <Typography
                variant="body2"
                color="#444444"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Happy
              </Typography>
            </Box>
          </Grid>
          {/* Item 2 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#00008B]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("acoustic")}
            >
              <Typography variant="h3" gutterBottom>
                😢💔
              </Typography>
              <Typography
                variant="body2"
                color="#F0F0F0"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Sad
              </Typography>
            </Box>
          </Grid>

          {/* Item 3 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#FF0000]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("rock")}
            >
              <Typography variant="h3" gutterBottom>
                ⚡🏋️‍♂️
              </Typography>
              <Typography
                variant="body2"
                color="#F0F0F0"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Energetic
              </Typography>
            </Box>
          </Grid>

          {/* Item 4 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#ADD8E6]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("chill")}
            >
              <Typography variant="h3" gutterBottom>
                😌🛋️
              </Typography>
              <Typography
                variant="body2"
                color="#333333"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Relax
              </Typography>
            </Box>
          </Grid>

          {/* Item 5 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#FFB6C1]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("R&B")}
            >
              <Typography variant="h3" gutterBottom>
                ❤️💑
              </Typography>
              <Typography
                variant="body2"
                color="#444444"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Romantic
              </Typography>
            </Box>
          </Grid>

          {/* Item 6 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#000000]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("heavy metal")}
            >
              <Typography variant="h3" gutterBottom>
                😡🔥
              </Typography>
              <Typography
                variant="body2"
                color="#EEEEEE"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Angry
              </Typography>
            </Box>
          </Grid>

          {/* Item 7 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#0000CD]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("classical")}
            >
              <Typography variant="h3" gutterBottom>
                💻📚
              </Typography>
              <Typography
                variant="body2"
                color="#F0F0F0"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Focused
              </Typography>
            </Box>
          </Grid>

          {/* Item 8 */}
          <Grid item xs={6} sm={6} md={3}>
            <Box
              className=" py-2 cursor-pointer bg-[#704214]  border-gray-200   transition-all  transform duration-300 hover:scale-110 text-center rounded-lg border-solid border-2 sm:p-6 "
              onClick={() => handlegenerate("folk")}
            >
              <Typography variant="h3" gutterBottom>
                🕰️📼
              </Typography>
              <Typography
                variant="body2"
                color="##F0F0F0"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",

                  ":hover": { color: "#A0A0A0" },
                }}
              >
                Nostalgic
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ width: "100%", mb: 3 }}>
        <Typography
          className=" pl-4 font-bold sm:text-xl sm:pl-7"
          color="#00B0FF"
          component="h1"
        >
          How do you feel tell us
        </Typography>
        <Box className="flex justify-evenly items-center mt-2">
          <TextField
            value={usermood}
            onChange={(e) => setUsermood(e.target.value)}
            className="text-base w-[70%] sm:w-[85%]"
            placeholder="tell us how do you feel we will generate you best music for your feeling"
          />{" "}
          <Button
            onClick={fectchdata}
            variant="contained"
            sx={{ backgroundColor: "#00B0FF", color: "#E0E0E0" }}
            endIcon={<IoMdSend />}
          >
            send
          </Button>{" "}
        </Box>
      </Container>
    </div>
  );
}
