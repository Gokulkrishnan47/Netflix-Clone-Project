import React from "react";
import DataRow from "../../components/Row/DataRow";
import Banner from "../../components/Banner/Banner";
import Footer from "../Footer/Footer";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("userdetails");
  return (
    <div className="bg-black">
      {user ? (
        <>
          <Banner />
          <DataRow
            title="TRENDING NOW"
            searchmovie={""}
            fetchUrl={"trendingnow"}
          />
          <DataRow title="TOP RATED" searchmovie={""} fetchUrl={"toprated"} />
          <DataRow title="POPULAR" searchmovie={""} fetchUrl={"popular"} />
          <DataRow title="UPCOMING" searchmovie={""} fetchUrl={"upcoming"} />
          <Footer />
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
};

export default Home;
