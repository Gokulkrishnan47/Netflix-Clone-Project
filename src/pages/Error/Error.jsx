import React from "react";
import "./Error.css";
import Netflixlog from "../../asset/images/Front.png";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="error-container">
      <img className="error-img" alt="" src={Netflixlog} />
      <h1 className="error-h1">Lost your way?</h1>
      <h2 className="error-h2">
        {" "}
        sorry, we can't find page.You'll find lost to explore on the home page
      </h2>
      <Link to={"/"}>
        <button className="error-btn">Netflix Home</button>
      </Link>
      <h2 className="error-h2">Error Code NSES-404</h2>
    </div>
  );
};

export default Errorpage;
