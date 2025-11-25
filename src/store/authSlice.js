import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    updateProfile(state, action) {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
