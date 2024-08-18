import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../helpers/api";

export const fetchAllAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await fetchCampers();
      return data;
    } catch (e) {
      toast.error(`Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMoreAdverts = createAsyncThunk(
  "adverts/fetchMore",
  async (page, thunkAPI) => {
    try {
      const data = await fetchCampers(page);
      if (!data.length) {
        toast.error("There are no more adverts to load.");
      }
      return data;
    } catch (e) {
      toast.error(`Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
