import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils/interfaces/userInterfaces";

interface UserState {
  token: string;
  user: User | null;
}

const initialState: UserState = {
  token: '',
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    deleteActiveUser(state, _) {
      state.token = "";
      state.user = null;
    }
  }
});

export const { setActiveUser, deleteActiveUser } = userSlice.actions;
export default userSlice.reducer;