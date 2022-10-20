import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Donation {
  beneficiary: string;
  donor: string;
  donationAmount: number;
}

interface DonationState {
  newDonation: Donation | null;
  createDonationLoading: string;
}

const initialState: DonationState = {
  newDonation: null,
  createDonationLoading: 'idle',
};

export const createDonation = createAsyncThunk('donation/create', async (donation: any) => {
  const res = await axios.post('http://localhost:5001/donation/create', donation);
  return res.data;
});

export const DonationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    clearDonationLoadingStatus: (state, action) => {
      state.createDonationLoading = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(createDonation.fulfilled, (state, action: PayloadAction<Donation>) => {
      state.newDonation = action.payload;
      state.createDonationLoading = 'completed';
    });
    builder.addCase(createDonation.pending, (state, action) => {
      state.createDonationLoading = 'loading';
    });
  },
});

export const { clearDonationLoadingStatus } = DonationSlice.actions;

export default DonationSlice.reducer;
