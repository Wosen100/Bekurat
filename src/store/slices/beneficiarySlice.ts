import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
// import { NoSubstitutionTemplateLiteral } from 'typescript'

export const getBeneficiaries = createAsyncThunk(
  "beneficiary/getBeneficiaries",
  async () => {
    const res = await axios.get("http://localhost:5001/beneficiary/get");
    console.log(res);
    return res.data.beneficiaries;
  }
);

interface Beneficiary {
  name: string;
  description: string;
  address: string;
  image: string;
  curren_donation: number;
  donation_goal: number;
}

interface BeneState {
  beneficiaryList: Array<Beneficiary>;
}

const initialState = {
  beneficiaryList: [],
} as BeneState;
export const BeneSlices = createSlice({
  name: "beneficiary",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getBeneficiaries.fulfilled,
      (state, action: PayloadAction<Array<Beneficiary>>) => {
        state.beneficiaryList = action.payload;
      }
    );
  },
});

export default BeneSlices.reducer;

export const getAllBeneficiariesTest = (state: RootState) =>
  state.bene.beneficiaryList;
