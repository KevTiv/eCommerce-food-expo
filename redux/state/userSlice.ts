import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "../../@types";
import { RootState } from "../store";

const initialState: { info: userInfo } = {
  info: {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    img: "",
    role: "",
  },
};

export const userSlice = createSlice({
  name: "User Information",
  initialState,
  reducers: {
    user: (state: { info: userInfo }, action: PayloadAction<userInfo>) => {
      state.info = action.payload;
    },
  },
});

export const { user } = userSlice.actions;
export const getUser = (state: RootState) => state.user.info;
export default userSlice.reducer;
