import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: false,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const res = await fetch(
      'http://localhost:3000/api/v1/greeting/random_greeting',
    );
    const data = await res.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.greeting = 'Waiting';
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.greeting = action.error.message;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export default greetingSlice.reducer;
