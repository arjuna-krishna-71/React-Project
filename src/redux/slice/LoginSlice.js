import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  userType: "",
  userData: null,
  loading: false,
  error: "",
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const url = login === "user"
        ? "http://localhost:1025/users"
        : "http://localhost:1025/admins";

      const response = await axios.get(url);
      const users = response.data;

      const matchedUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (matchedUser) {
        return { userType: login, userData: matchedUser };
      } else {
        return thunkAPI.rejectWithValue("Invalid username or password");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed due to server error");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.userType = "";
      state.userData = null;
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = true;
        state.isLoggedIn = true;
        state.userType = action.payload.userType;
        state.userData = action.payload.userData;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
