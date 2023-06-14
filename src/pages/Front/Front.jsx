import { Link, useNavigate } from "react-router-dom";
import { BsGlobe } from "../../icons";
import Singlecontainer from "../animation/Animation";
import Footer from "../Footer/Footer.jsx";
import Questions from "../Questions/Questions";
import Frontimg from "../../asset/images/Front.png";
import "./Front.css";
import { useState } from "react";
import { useEffect } from "react";
import { getuser } from "../../lib/axios/api-functions/user";

const Front = () => {
  const [details, setDetails] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    getuser().then(({ data }) => setDetails(data));
  }, []);
  const navigator = useNavigate();
  const getstart = () => {
    const value = details?.find((val) => val.email === user.email);
    if (value?.email === user.email) {
      navigator("/login");
    }
  };

  return (
    <div>
      <div className="f-page-container">
        <div className="front-one">
          <img className="front-nf-img" alt="" src={Frontimg} />
          <div className="relative ">
            <BsGlobe className="absolute top-[10px] left-[20px]" />
            <select className="front-select f-s">
              <option value="">English</option>
              <option value="">Tamil</option>
            </select>
            <Link to={"/login"}>
              <button className="front-select p-[5px] w-[100px] bg-red-600">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-[150px] text-center">
          <h1 className="text-[50px] font-bold p-2">
            Unlimited movies, TV shows and more.
          </h1>
          <p className=" text-[25px] p-2">Watch anywhere. Cancel anytime.</p>
          <p className="text-[20px] p-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="front-three text-center">
          <input
            type="text"
            placeholder=" "
            className="front-inpt"
            onChange={(e) => setUser({ email: e.target.value })}
          />
          <label className="font-label" htmlFor="">
            Email Address
          </label>
          <button
            className="front-btn text-[25px] font-bold"
            onClick={() => getstart()}
          >
            Get Started
          </button>
        </div>
      </div>
      <Singlecontainer />
      <Questions inpt={"front-inpt"} btn={"front-btn"} lab={"font-labe"} />
      <Footer />
    </div>
  );
};

export default Front;
