import { useState } from "react";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { toast } from "react-hot-toast";
import { useChangePassMutation } from "../../features/company/put/changePasswordApiSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const INITIAL_DATA = {
  oldPassword: "",
  newPassword: "",
};

const ChangePassword = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [changePass] = useChangePassMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePass(data).unwrap();
      toast.success("Password update successfull");
      dispatch(logout());
    } catch (err) {
      toast.success(err.data.msg);
      console.log("Error on company login", err);
    }
  };
  return (
    <Container>
      <TitleBar
        title="Employer Update Password"
        path="Employer / Dashboard / Update Password"
      />
      <div className="bg-white p-10 rounded-lg mt-5">
        <form onSubmit={handleSubmit}>
          <div className="w-1/2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Old password
            </label>
            <div className="mt-2">
              <input
                value={data.oldPassword}
                onChange={(e) =>
                  setData({ ...data, oldPassword: e.target.value })
                }
                type="password"
                name="minExprience"
                id="minExprience"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/2 mt-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New password
            </label>
            <div className="mt-2">
              <input
                value={data.newPassword}
                onChange={(e) =>
                  setData({ ...data, newPassword: e.target.value })
                }
                type="password"
                name="newPassword"
                id="newPassword"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Change password
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ChangePassword;
