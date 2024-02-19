import { useState } from "react";
import { useDispatch } from "react-redux";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { logout } from "../../features/auth/authSlice";
import { useDeleteAccountMutation } from "../../features/company/delete/deleteAccountApiSlice";
import Container from "../../layout/Container";
import { useToast } from "../../ui/use-toast";
import { TApiError } from "../../@types/TApiError";

const INITIAL_DATA = {
  password: "",
};

const DeleteCompany = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [deleteAccount] = useDeleteAccountMutation();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await deleteAccount(data).unwrap();
      toast({
        description: "Account deleted successfully"
      })
      dispatch(logout());
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError.data.message
      })
    }
  };
  return (
    <Container>
      <TitleBar
        title="Employer Delete Profile"
        path="Employer / Dashboard / Delete Account"
      />
      <div className="bg-white p-10 rounded-lg mt-5">
        <form onSubmit={handleSubmit}>
          <div className="w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your password To Delete Account
            </label>
            <div className="mt-2">
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                name="minExprience"
                id="minExprience"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete Account
          </button>
        </form>
      </div>
    </Container>
  );
};

export default DeleteCompany;
