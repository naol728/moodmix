import axios from "axios";

const CLIENT_ID = "dcabef7f7471483d843aaee32d8cac82"; // Replace with your Client ID
const CLIENT_SECRET = "5e144034eea5410eadbcef47133434aa"; // Replace with your Client Secret

const getAccessToken = async () => {
  const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const tokenUrl = "https://accounts.spotify.com/api/token";

  try {
    const response = await axios.post(
      tokenUrl,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

export default getAccessToken;
