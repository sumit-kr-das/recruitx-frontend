export interface AuthState {
  status: string | null;
  data: {
    user: string | null;
    role: string | null;
    access_token: string | null;
  };
}
