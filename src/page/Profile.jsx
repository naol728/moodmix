import React, { useEffect } from "react";
import { useAuth } from "../context/Authcontext";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { LampContainer } from "../ui/Lampeffect";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const { currentuser, islogedin } = useAuth();
  console.log(currentuser);

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
    <Container maxWidth="lg">
      <Box className="flex flex-col items-center space-y-8 justify-center   px-2 py-10 rounded-lg">
        <LampContainer>
          <Avatar
            src={currentuser.photoURL}
            sx={{ width: "200px", height: "200px" }}
          />
          <Typography
            sx={{
              fontSize: "1.5rem",
              wordSpacing: "0.7em",
              fontWeight: "bold",
            }}
          >
            👋{" "}
            {currentuser.displayName
              ? currentuser.displayName.toUpperCase()
              : currentuser.email}{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              wordSpacing: "0.7em",
              fontWeight: "500",
            }}
          >
            {currentuser?.email}
          </Typography>
        </LampContainer>
      </Box>
    </Container>
  );
}
