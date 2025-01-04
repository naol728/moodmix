import React, { useEffect } from "react";
import { useMusic } from "../context/musiccontext";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import { Grid, Box, Typography, Container } from "@mui/material";
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
    <div className="h-dvh">
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
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                😊🎉
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                😢💔
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                ⚡🏋️‍♂️
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                😌🛋️
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                ❤️💑
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                😡🔥
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                💻📚
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
                cursor: "pointer",
              }}
            >
              <Typography variant="h3" gutterBottom>
                🕰️📼
              </Typography>
              <Typography
                variant="body2"
                color="#E0E0E0"
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
    </div>
  );
}
