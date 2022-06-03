import { NGROK_URL } from "@env";
import axios from "axios";

export const getUserDataFromGoogleOAuthV2 = async (token?: string) => {
  let userInfoResponse = await fetch(
    "https://www.googleapis.com/userinfo/v2/me",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  userInfoResponse.json().then((data) => {
    return data;
  });
};

export const getUserAuthDetails = async (googleOAuthTokenResult: string) => {
  const URL = NGROK_URL;

  const config = {
    headers: { Authorization: `Bearer ${googleOAuthTokenResult}` },
  };
  const bodyParameters = {
    key: "value",
  };
  try {
    const res = await axios.post(`${URL}/auth`, bodyParameters, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
