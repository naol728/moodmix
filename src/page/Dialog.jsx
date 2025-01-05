import React, { useEffect } from "react";
import { useMusic } from "../context/musiccontext";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Grid, Box, Typography, Container, TextField } from "@mui/material";
import { IoMdSend } from "react-icons/io";

export default function Dialog() {
  const { handlegenerate } = useMusic();
  const { islogedin, currentuser } = useAuth();
  const navigate = useNavigate();
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
      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: "bold" }}
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                backgroundColor: "#FFD700",
                textAlign: "center",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
              onClick={() => handlegenerate("dance")}
            >
              <Typography variant="h3" gutterBottom>
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",
                backgroundColor: "#00008B",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                backgroundColor: "#FF0000",
                textAlign: "center",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                backgroundColor: "#ADD8E6",
                textAlign: "center",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",
                backgroundColor: "#FFB6C1",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                backgroundColor: "#000000",
                textAlign: "center",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",
                backgroundColor: "#0000CD",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",
                backgroundColor: "#704214",
                cursor: "pointer",
              }}
              className="transition-all  transform duration-300 hover:scale-110"
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
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: 5,
            marginLeft: 3,
          }}
          color="#00B0FF"
          component="h1"
        >
          How do you feel tell us
        </Typography>
        <Box className="flex justify-evenly items-center mt-2">
          <TextField
            sx={{ width: "85%" }}
            placeholder="tell us how do you feel we will generate you best music for your feeling"
          />{" "}
          <Button
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
