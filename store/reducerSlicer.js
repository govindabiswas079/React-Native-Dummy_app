import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  RegisterData: {},
  authLoading: true,
  isTabHide: true,
  isPlay: false,
  Progress: 0,
  Duration: 0,
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setRegisterData: (state, action) => {
      state.RegisterData = action?.payload
    },
    setAuthLoader: (state, action) => {
      state.authLoading = action?.payload
    },
    setIsTabHide: (state, action) => {
      state.isTabHide = action?.payload
    },
    setIsPlay: (state, action) => {
      state.isPlay = !state.isPlay
    },
    setProgress: (state, action) => {
      state.Progress = action?.payload
    },
    setDuration: (state, action) => {
      state.Duration = action?.payload
    },

  },

});

export const { setRegisterData, setAuthLoader, setIsTabHide, setIsPlay, setProgress, setDuration } = reducerSlicer.actions;
export default reducerSlicer.reducer;
