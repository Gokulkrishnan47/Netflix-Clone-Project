import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import DataRow from "../Row/DataRow";
import Footerpage from "../../pages/Footer/Footer.jsx";

const SingleNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-black">
      {pathname.slice(1) === "tv%20Shows" ? (
        <>
          <Banner />
          <DataRow title="TV SHOWS" searchmovie={""} fetchUrl={"popular"} />
        </>
      ) : (
        ""
      )}
      {pathname.slice(1) === "movies" ? (
        <>
          <Banner />
          <DataRow title="MOVIES" searchmovie={""} fetchUrl={"topRated"} />
        </>
      ) : (
        " "
      )}
      {pathname.slice(1) === "new%20&%20Popular" ? (
        <>
          <Banner />
          <DataRow title="NEW POPULAR" searchmovie={""} fetchUrl={"popular"} />
        </>
      ) : (
        " "
      )}
      {pathname.slice(1) === "browser%20by%20languages" ? (
        <>
          <Banner />
          <DataRow title="Browser" searchmovie={""} fetchUrl={"trendingnow"} />
        </>
      ) : (
        " "
      )}
      <DataRow title="UPCOMING" searchmovie={""} fetchUrl={"upComing"} />
      <Footerpage />
    </div>
  );
};

export default SingleNav;
