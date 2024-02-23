export interface UserState {
  user: {
    name: string | null;
    email: string | null;
    phoneNo: string | null;
    workStatus: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    status: string | null;
  };
  info: {
    photo: string | null;
    objective: string | null;
  };
  education: {
    degree: string | null;
    college: string | null;
  };
}
