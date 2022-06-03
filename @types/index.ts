import { AuthError, TokenResponse } from "expo-auth-session";

export type authResponseType = {
  type: "error" | "success";
  errorCode: string | null;
  error?: AuthError | null | undefined;
  params: Record<string, string>;
  authentication: TokenResponse | null;
  url: string;
};

export type googleOAuthResponse = {
  accessToken: string;
  expiresIn: string;
  idToken?: string;
  issuedAt: number;
  refreshToken?: string;
  scope: string;
  state: string;
  tokenType: string;
};

export type tokenType = {
  googleOAuthResponse: {
    accessToken: string;
  };
  tokenJWT: {
    access_token: string;
    refresh_token: string;
  };
};

export type userInfo = {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  img: string;
  role: string;
};

export type authResultType = {
  user_info: userInfo;
  access_token: tokenType["tokenJWT"]["access_token"];
  refresh_token: tokenType["tokenJWT"]["refresh_token"];
};

export type geoLocationType = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
