import { apiSlice } from "../../../app/api/apiSlice";

interface ViewCompany {
  _id: string,
  name: string,
  email: string,
  phone: string,
  password: string,
  companyName: string,
  industry: string,
  designation: string,
  pin: string,
  address: string,
  role: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  companyProfileId: {
    _id: string,
    logo: string
  }
}


export const viewCompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewCompany: builder.query<ViewCompany, void>({
      query: () => "/company/view",
      providesTags: ["Company", "CompanyProfileDetails"],
    }),
  }),
});

export const { useViewCompanyQuery } = viewCompanyApiSlice;
