import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { DonateUpdateType } from '../../pages/beneficiaryDetails/DonateForm';

export const getBeneficiaries = createAsyncThunk('beneficiary/getBeneficiaries', async () => {
  const res = await axios.get('/beneficiary/get');
  console.log(res);
  return res.data.beneficiaries;
});

export const createBeneficiary = createAsyncThunk('beneficiary/createBeneficiary', async (yourData: any) => {
  let { imageFile, beneficiary } = yourData;

  try {
    let imagepath = await uploadImage(imageFile);

    try {
      const createBeneficiaryResponse = await axios.post('/beneficiary/add', {
        ...beneficiary,
        image: imagepath ? imagepath : '',
      });
      return createBeneficiaryResponse.data.message.beneficiary;
    } catch {
      return null;
    }
  } catch {
    return null;
  }
});

export const updateWithDonate = createAsyncThunk('beneficiary/donate', async (params: DonateUpdateType) => {
  let { _id, donation } = params;
  try {
    const beneUpdateRes = await axios.put('/beneficiary/donate', { _id, donation });
    return beneUpdateRes.data;
  } catch {
    return null;
  }
});

const uploadImage = async (imageFile: any) => {
  try {
    const uploadRes = await axios.post('/beneficiary/upload', imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (uploadRes.data.status === 200) {
      return uploadRes.data.filePath;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export interface Beneficiary {
  _id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  curren_donation: number;
  donation_goal: number;
}

interface BeneState {
  beneficiaryList: Array<Beneficiary>;
  createBeneLoading: String;
  selectedBeneficiary: Beneficiary | null;
  updateBeneLoading: String;
}

const initialState = {
  beneficiaryList: [],
  createBeneLoading: 'idle',
  selectedBeneficiary: null,
  updateBeneLoading: 'idle',
} as BeneState;

export const BeneSlices = createSlice({
  name: 'beneficiary',
  initialState,
  reducers: {
    selectBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      state.selectedBeneficiary = action.payload;
    },
    clearBeneLoading: (state, action) => {
      state.createBeneLoading = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(getBeneficiaries.fulfilled, (state, action: PayloadAction<Array<Beneficiary>>) => {
      state.beneficiaryList = action.payload;
    });
    builder.addCase(createBeneficiary.pending, (state, action) => {
      state.createBeneLoading = 'loading';
    });
    builder.addCase(createBeneficiary.fulfilled, (state, action: PayloadAction<Beneficiary>) => {
      state.createBeneLoading = 'completed';
      state.beneficiaryList = [...state.beneficiaryList, action.payload];
    });
    builder.addCase(createBeneficiary.rejected, (state, action) => {
      state.createBeneLoading = 'failed';
      state.beneficiaryList = [];
    });
    builder.addCase(updateWithDonate.pending, (state, action) => {
      state.updateBeneLoading = 'loading';
    });
    builder.addCase(updateWithDonate.fulfilled, (state, action) => {
      state.updateBeneLoading = 'completed';
    });
    builder.addCase(updateWithDonate.rejected, (state, action) => {
      state.updateBeneLoading = 'failed';
    });
  },
});

export const { selectBeneficiary, clearBeneLoading } = BeneSlices.actions;

export default BeneSlices.reducer;
