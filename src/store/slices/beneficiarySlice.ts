import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

export const getBeneficiaries = createAsyncThunk(
  "beneficiary/getBeneficiaries",
  async () => {
    const res = await axios.get("http://localhost:5001/beneficiary/get");
    console.log(res);
    return res.data.beneficiaries;
  }
);

export const createBeneficiary = createAsyncThunk(
  "beneficiary/createBeneficiary",
  async (yourData: any) => {
    let { imageFile, beneficiary } = yourData;

    let imagepath = await uploadImage(imageFile);

    const createBeneficiaryResponse = await axios.post(
      "http://localhost:5001/beneficiary/add",
      { ...beneficiary, image: imagepath ? imagepath : "" }
    );
    return createBeneficiaryResponse.data.message.beneficiary;
  }
);

const updateWithDonate = createAsyncThunk(
  "beneficiary/donate",
  async (params: any) => {
    let { _id, donation } = params;
    const beneUpdateRes = await axios.put(
      "http://localhost:5001/beneficiary/donate",
      { _id, donation }
    );
    console.log(beneUpdateRes.data);
    return beneUpdateRes.data;
  }
);

const uploadImage = async (imageFile: any) => {
  const uploadRes = await axios.post(
    "http://localhost:5001/beneficiary/upload",
    imageFile,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  if (uploadRes.data.status === 200) {
    return uploadRes.data.filePath;
  } else {
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
}

const initialState = {
  beneficiaryList: [],
  createBeneLoading: "idle",
  selectedBeneficiary: null,
} as BeneState;
export const BeneSlices = createSlice({
  name: "beneficiary",
  initialState,
  reducers: {
    selectBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      state.selectedBeneficiary = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getBeneficiaries.fulfilled,
      (state, action: PayloadAction<Array<Beneficiary>>) => {
        state.beneficiaryList = action.payload;
      }
    );
    builder.addCase(createBeneficiary.pending, (state, action) => {
      state.createBeneLoading = "loading";
    });
    builder.addCase(
      createBeneficiary.fulfilled,
      (state, action: PayloadAction<Beneficiary>) => {
        // console.log(action);
        state.createBeneLoading = "completed";
        state.beneficiaryList = [...state.beneficiaryList, action.payload];
      }
    );
  },
});

export const { selectBeneficiary } = BeneSlices.actions;

export default BeneSlices.reducer;
