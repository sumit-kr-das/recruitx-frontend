import React, { useRef, useState } from "react";
import { useUpdateCompanyProfileMutation } from "../../../features/company/put/updateCompanyProfileDetailsApiSlice";
import { useUpdateUserInfoMutation } from "../../../features/user/put/updateUserInfoDataApiSlice";
import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../ui/dialog";
import { useToast } from "../../../ui/use-toast";
import { useDispatch } from "react-redux";
import { updateUserPhoto } from "../../../features/user/userSlice";

type Props = {
  setProfile: (props: boolean) => void;
  type: string;
  profile: boolean;
};

const ChangeProfile = ({ setProfile, profile, type }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [updateCompanyProfile] = useUpdateCompanyProfileMutation();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const file = e.target!.files![0];
    if (file.name) {
      setImage(file);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (!image) {
      return;
    }
    formData.append("photo", image);

    try {
      let res;
      if (type === "user") {
        res = await updateUserInfo(formData).unwrap();
      } else if (type === "company") {
        res = await updateCompanyProfile(formData).unwrap();
      }
      dispatch(updateUserPhoto({ photo: res?.data?.photo }));
      toast({
        description: "Profile update successfull",
      });
      setProfile(false);
    } catch (error) {
      toast({
        description: "Internal server error",
      });
      setProfile(false);
    }
  };

  return (
    <Dialog open={profile} onOpenChange={setProfile}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update profile picture</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div
          onClick={handleClick}
          className="p-5 flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center py-10 text-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                // width={180}
                alt="user_default"
                className="w-[120px] h-[120px] rounded-full border"
              />
            ) : (
              <>
                <svg
                  className="w-6 h-6 mr-1 text-current-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="m-0">
                  Drag your files here or click in this area.
                </p>
              </>
            )}
          </div>
          <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            className="hidden"
          />
        </div>
        <Button onClick={handleUpload} className="float-right" type="submit">
          Update Profile
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeProfile;
