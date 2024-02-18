import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyState } from "../../@types/features/companySlice";
import { RootState } from "../../app/store";

const initialState: CompanyState = {
    company: {
        name: null,
        email: null,
        companyName: null,
        designation: null,
        industry: null
    },
    info: {
        logo: null
    }
}

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompanyData: (_, action: PayloadAction<CompanyState>) => {
            return action.payload
        },
        removeCompanyData: () => {
            return initialState;
        },
    },
});

export const { setCompanyData, removeCompanyData } = companySlice.actions;
export default companySlice.reducer;
export const selectCurrentCompanyData = (state: RootState) => state.company;