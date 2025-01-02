import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { createTheme } from "@mui/material/styles";
// import { useColorSchemeShim } from "docs/src/modules/components/ThemeContext";
// import { getDesignTokens, inputsCustomizations } from "./customTheme";

const providers = [
  { id: "google", name: "Google" },
  { id: "credentials", name: "Email and Password" },
];

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: "This is a mock error message." });
    }, 500);
  });
  return promise;
};

export default function Mokeup() {
  return (
    <AppProvider>
      <SignInPage
        providers={providers}
        onSubmit={(credentials) => handleSignIn(selectedProvider, credentials)}
        sx={{
          "& form > .MuiStack-root": {
            marginTop: "2rem",
            rowGap: "0rem",
          },
        }}
      />
    </AppProvider>
    // preview-end
  );
}
