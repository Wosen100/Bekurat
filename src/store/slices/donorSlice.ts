import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Donor {
  _id: string;
  fname: string;
  lName: string;
  email: string;
  postalCode: string;
}

interface DonorState {
  newDonor: Donor | null;
}

const initialState: DonorState = {
  newDonor: null,
};

export const createNewDonor = createAsyncThunk(
  "donor/create",
  async (donor: any) => {
    console.log(donor);
    const res = await axios.post("http://localhost:5001/donor/add", donor);
    return res.data.message.donor;
  }
);

export const DonorSlice = createSlice({
  name: "donor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      createNewDonor.fulfilled,
      (state, action: PayloadAction<Donor>) => {
        state.newDonor = action.payload;
      }
    );
  },
});

export default DonorSlice.reducer;
