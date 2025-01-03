import React, { useState } from "react";
import { docreateuserwithemailandpassword } from "../firebase/Auth";
import { Link, Navigate } from "react-router-dom";
import { SignInPage } from "@toolpad/core/SignInPage";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useAuth } from "../context/Authcontext";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import useStyles from "./formstyle";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isregester, setIsregester] = useState(false);
  const styles = useStyles();
  const { islogedin } = useAuth();
  const onsubmit = async (e) => {
    setIsLoading(true);
    if (!isregester) {
      setIsregester(true);
      await docreateuserwithemailandpassword(email, password).catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
    }
  };
  if (islogedin) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <AppProvider>
        <Container maxWidth="xs" className={styles.formContainer}>
          <Box
            component="form"
            onSubmit={onsubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 3,
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "transparent",
            }}
          >
            <Typography variant="h5" component="h1" textAlign="center">
              Sign Up
            </Typography>
            <Typography variant="h8" component="h1" textAlign="center">
              please regester to continue
            </Typography>

            <TextField
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Register
            </Button>
          </Box>
        </Container>
      </AppProvider>
    </div>
  );
}
