import { useNavigate } from "react-router-dom";
import Netfliximg from "../../asset/images/Netflix-user.png";
import "../../pages/Profile/Profile.css";

const Profilepage = () => {
  const user = JSON.parse(localStorage.getItem("userdetails"));
  const navigator = useNavigate();
  const logout = () => {
    localStorage.removeItem("userdetails");
    navigator("/");
  };
  return (
    <div className=" profile-p-container bg-black text-white">
      <div className="p1 flex ">
        <img
          className="profile-img w-[35px] h-[35px]"
          src={Netfliximg}
          alt=""
        />
        <h1 className="pt-[21px]">{user?.email}</h1>
      </div>
      <h2 className="p-a">Manage Profiles</h2>
      <br />
      <h2 className="p-a">Transfor Profile</h2>
      <br />
      <h2 className="p-a">Account</h2>
      <br />
      <h2 className="p-a">Help Center</h2>
      <br />
      <div className="p3">
        <button onClick={logout}>Sign out of Netflix</button>
      </div>
    </div>
  );
};

export default Profilepage;
