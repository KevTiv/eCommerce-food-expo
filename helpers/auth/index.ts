import axios, { AxiosPromise, AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { tokenType } from "../../@types";
import {
  getGoogleOAuthToken,
  jwtAccessToken,
  jwtRefreshToken,
} from "../../redux/state/tokenState";

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

export const getNewUserTokens = async (googleOAuthTokenResult: string) => {
  const URL = "https://7945-2c0f-eb68-203-db00-3d72-6d48-bc4e-7bdb.eu.ngrok.io";
  // const googleOAuthTokenResult = useSelector(getGoogleOAuthToken);
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
