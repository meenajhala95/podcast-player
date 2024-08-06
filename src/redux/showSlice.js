import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShows } from '../services/api';

export const fetchShowList = createAsyncThunk('shows/fetchShowList', async () => {
  const response = await fetchShows();
  return response.shows;
});

const showSlice = createSlice({
  name: 'shows',
  initialState: {
    list: [],
    episodes: [],
    currentEpisode: null,
  },
  reducers: {
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    setCurrentEpisode: (state, action) => {
      state.currentEpisode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShowList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setEpisodes, setCurrentEpisode } = showSlice.actions;
export default showSlice.reducer;
