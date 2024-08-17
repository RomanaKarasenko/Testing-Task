import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts, fetchMoreAdverts } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    favorite: [],
    page: 2,
    loading: false,
    error: null,
    filters: {
      location: "",
      details: {
        airConditioner: false,
        kitchen: false,
        TV: false,
        shower: false,
      },
      form: "",
      transmission: "",
    },
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isFavorite = state.favorite.find(
        (el) => el._id === action.payload._id
      );

      if (isFavorite) {
        state.favorite = state.favorite.filter(
          (el) => el._id !== action.payload._id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetPage: (state) => {
      state.page = 2;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {
        location: "",
        details: {
          airConditioner: false,
          kitchen: false,
          TV: false,
          shower: false,
        },
        form: "",
        transmission: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, handlePending)
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllAdverts.rejected, handleRejected)
      .addCase(fetchMoreAdverts.pending, handlePending)
      .addCase(fetchMoreAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        if (action.payload.length < 4) {
          state.page = "lastPage";
        } else {
          state.page = state.page + 1;
        }
      })
      .addCase(fetchMoreAdverts.rejected, handleRejected);
  },
});

export const { toggleFavorite, resetPage, setFilters, resetFilters } =
  advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
