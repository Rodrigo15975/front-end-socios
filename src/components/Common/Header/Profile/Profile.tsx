import { storeOpenProfile } from "@/store";
import { Avatar } from "antd";
import { BiSolidUserPin } from "react-icons/bi";

const Profile = () => {
  // Perfil general
  const { setOpenProfile } = storeOpenProfile();

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="flex mr-4 items-center gap-2">
          <p className="text-[1rem] text-text_primary font-robotoSlab_500">
            Alex
          </p>
          <Avatar
            className="cursor-pointer"
            onClick={setOpenProfile}
            style={{
              background: "white",
            }}
            alt="profile"
            src={""}
            size="large"
            icon={<BiSolidUserPin className="text-text_primary rounded-full" />}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
