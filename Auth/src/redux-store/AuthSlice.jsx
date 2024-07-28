import toast from "react-hot-toast";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: localStorage.getItem("isAuthenticated") ? true : false,
  loading: false,
  error: null,
};

const API_URL ="http://localhost:8000"


// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userRegisterData, thunkAPI) => {
    try {
      const emailResponse = await axios.get(`http://localhost:8000/users?email=${userRegisterData.email}`);
      if (emailResponse.data.length>0) {
        toast.error("Email is already taken", {
          className: "custom-class-toast",
          duration: 4000,
        });
        
      }
       const response = await axios.post(`http://localhost:8000/users`, userRegisterData);
      return response.data; 
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.response.data.error || "Failed to register.");
    }
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userLoginData, thunkAPI) => {
    try {
        console.log(userLoginData.email);
      const response = await axios.get(`http://localhost:8000/users?email=${userLoginData.email}`);
       console.log(response);
      // console.log(userLoginData.password);

      // Check if user exists and password matches
      const user = response.data.find(user => user.email == userLoginData.email && user.password == userLoginData.password);
      
      if (user) {
        // User found and credentials match, return user data or relevant informatio
        console.log(user);
        return user;
      } else {
        // User not found or credentials are incorrect
        return thunkAPI.rejectWithValue("invalid credinatls,email or password not correct");

       
      // setTimeout(() => {
      //   toast.error("invalid credinatls",{
      //     className:"custom-class-toast",
      //   })
  
      // // window.location.href = "/login";
      //  }, 3000);
      }
    } catch (error) {
      // Handle fetch errors (network, server errors)
      return thunkAPI.rejectWithValue("Failed to login. Please try again.");
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.clear();
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false; // For simplicity, assuming registration automatically logs in
        state.error = null;
        // localStorage.setItem("isAuthenticated", true);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload; // Handle error
        localStorage.removeItem("isAuthenticated");
        localStorage.clear();
      })
      // Login user cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        console.log(state.loading );
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        
        state.loading = false;
        
        console.log(state,"555" );
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem("isAuthenticated", true);
      })
      .addCase(loginUser.rejected, (state, action) => {
           
        toast.error("invalid credinatls",{
          className:"custom-class-toast",
        })
        state.loading = false;

      // window.location.href = "/login";
     
       state.loading = false;

        state.isLoggedIn = false;
        state.error = action.payload; // Handle error
        localStorage.removeItem("isAuthenticated");
        localStorage.clear();
      });
  },
});

export const {login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
