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
