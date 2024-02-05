export type TCompany = {
  _id: string;
  address: string;
  companyName: string;
  email: string;
  industry: string;
  name: string;
  phone: string;
  pin: string;
  companyProfileId: {
    _id: string;
    logo?: string;
    type: string;
  };
};
