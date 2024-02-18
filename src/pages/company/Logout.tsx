import { useDispatch } from "react-redux";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { logout } from "../../features/auth/authSlice";
import { removeUserData } from "../../features/user/userSlice";
import Container from "../../layout/Container";
import ApproveAlert from "../../components/recruit/ApproveAlert";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeUserData());
  };
  return (
    <Container>
      <ApproveAlert />
      <TitleBar
        title="Employer Logout Profile"
        path="Employer / Dashboard / Logout Account"
      />
      <div className="bg-white p-10 rounded-lg mt-5">
        <button
          onClick={handleLogout}
          className="mt-4 rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-syan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Logout account
        </button>
      </div>
    </Container>
  );
};

export default Logout;
