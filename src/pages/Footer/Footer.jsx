import React from "react";
import "./Footer.css";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="mb-[10px]">
        Questions? <a href="">Call 000-800-919-1694</a>
      </h1>
      <div className="footer-parent ">
        <div className=" footer-ap">
          <a href="#">FAQ</a>
          <br />
          <a href="#">Media Centre</a>
          <br />
          <a href="#">Ways to Watch</a>
          <br />
          <a href="#">Cookie Preferences</a>
          <br />
          <a href="#">Speed Test</a>
          <br />
        </div>
        <div className=" footer-ap">
          <a href="#">Help Centre</a>
          <br />
          <a href="#">Investor Relations</a>
          <br />
          <a href="#">Terms of Use</a>
          <br />
          <a href="#">Corporate Information</a>
          <br />
          <a href="#">Legal Notices</a>
          <br />
        </div>
        <div className=" footer-ap">
          <a href="#">Account</a>
          <br />
          <a href="#">Jobs</a>
          <br />
          <a href="#">Privacy</a>
          <br />
          <a href="#">Contact Us</a>
          <br />
          <a href="#">Only on Netflix</a>
          <br />
        </div>
      </div>
      <div className="relative">
        <BsGlobe className="absolute left-[15px] top-[10px]" />
        <select
          className="mb-[10px] bg-black w-[140px] pl-[47px] font-size-[14px] p-[7px] f-btn "
          name=""
          id=""
        >
          <option value="">English</option>
          <option value="">Tamil</option>
        </select>
      </div>
      <h1 className="mt-[20px]">Netflix</h1>
    </div>
  );
};

export default Footer;
