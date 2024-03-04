import { useDispatch } from "react-redux";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { logout } from "../../features/auth/authSlice";
import { removeUserData } from "../../features/user/userSlice";
import Container from "../../layout/Container";
import ApproveAlert from "../../components/recruit/ApproveAlert";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
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
      <Card className="bg-white p-10 rounded-lg mt-5">
        <Button
          onClick={handleLogout}
        >
          Logout account
        </Button>
      </Card>
    </Container>
  );
};

export default Logout;
