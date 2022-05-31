import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tokenType } from "../../@types";
import { RootState } from "../store";

const initialState: tokenType = {
  googleOAuthResponse: {
    accessToken: "",
  },
  tokenJWT: {
    access_token: "",
    refresh_token: "",
  },
};

export const tokenSlice = createSlice({
  name: "Google OAuth V2",
  initialState,
  reducers: {
    googleOAuthToken: (state: tokenType, action: PayloadAction<string>) => {
      state.googleOAuthResponse.accessToken = action.payload;
    },
    jwtAccessToken: (state: tokenType, action: PayloadAction<string>) => {
      state.tokenJWT.access_token = action.payload;
    },
    jwtRefreshToken: (state: tokenType, action: PayloadAction<string>) => {
      state.tokenJWT.refresh_token = action.payload;
    },
  },
});

export const { googleOAuthToken, jwtAccessToken, jwtRefreshToken } =
  tokenSlice.actions;
export const getGoogleOAuthToken = (state: RootState) =>
  state.token.googleOAuthResponse.accessToken;
export const getJwtAccessToken = (state: RootState) =>
  state.token.tokenJWT.access_token;
export const getJwtRefreshToken = (state: RootState) =>
  state.token.tokenJWT.refresh_token;
export default tokenSlice.reducer;
