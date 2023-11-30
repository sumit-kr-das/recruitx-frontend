import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useUpdateUserInfoMutation } from "../../../features/user/put/updateUserInfoDataApiSlice";
import Modal from "../../Modal";
import axios from "axios";

const ChangeProfile = ({ profile, setProfile }) => {
  const inputRef = useRef(null);
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    console.log(file);
    
    const formData = new FormData();
    formData.append("photo", file);
    try {
      await updateUserInfo(formData).unwrap();
      toast.success("Photo uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload photo");
    }
  };

  return (
    <Modal>
      <input type="file" ref={inputRef} onChange={handleUpload} />
    </Modal>
  );
};

export default ChangeProfile;
