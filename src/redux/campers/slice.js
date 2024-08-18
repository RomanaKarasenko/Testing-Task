import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts, fetchMoreAdverts } from "./operations";

const initialFilters = {
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

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    favorite: [],
    page: 1,
    loading: false,
    error: null,
    filters: initialFilters,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favorite.findIndex(
        (el) => el._id === action.payload._id
      );

      if (existingIndex !== -1) {
        state.favorite.splice(existingIndex, 1);
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetPage: (state) => {
      state.page = 1;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialFilters;
    },
  },
  extraReducers: (builder) => {
    const setLoading = (state) => {
      state.loading = true;
      state.error = null;
    };

    const handleError = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };

    builder
      .addCase(fetchAllAdverts.pending, setLoading)
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.page = 2;
      })
      .addCase(fetchAllAdverts.rejected, handleError)
      .addCase(fetchMoreAdverts.pending, setLoading)
      .addCase(fetchMoreAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
        state.page = action.payload.length < 4 ? "lastPage" : state.page + 1;
      })
      .addCase(fetchMoreAdverts.rejected, handleError);
  },
});

export const { toggleFavorite, resetPage, setFilters, resetFilters } =
  advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
