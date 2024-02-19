import { useRef } from "react";
import { toast } from "react-hot-toast";
import { useUpdateUserInfoMutation } from "../../../features/user/put/updateUserInfoDataApiSlice";
import Modal from "../../Modal";
import { useUpdateCompanyProfileMutation } from "../../../features/company/put/updateCompanyProfileDetailsApiSlice";


type Props = {
  setProfile: Function,
  type: string,
  profile: boolean
}
const ChangeProfile = ({ setProfile, type }: Props) => {
  const inputRef = useRef(null);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [updateCompanyProfile] = useUpdateCompanyProfileMutation();

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);

    try {
      if (type === "user") {
        await updateUserInfo(formData).unwrap();
      } else if (type === "company") {
        await updateCompanyProfile(formData).unwrap();
      }
      toast.success("Photo uploaded successfully!");
      setProfile(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload photo");
      setProfile(false);
    }
  };

  return (
    <Modal>
      <input type="file" ref={inputRef} onChange={handleUpload} />
    </Modal>
  );
};

export default ChangeProfile;
