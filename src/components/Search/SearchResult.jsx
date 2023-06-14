import { useUserContext } from "../../utils/hooks/userContext";
import DataRow from "../Row/DataRow";
import Footerpage from "../../pages/Footer/Footer.jsx";
const SearchResult = () => {
  const { searchmovie } = useUserContext();

  return (
    <div className="bg-black text-white">
      <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">Top Search..</h1>
      <DataRow title="" searchmovie={searchmovie} fetchUrl={"movies"} />
      <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">Recent view..</h1>
      <DataRow title="" searchmovie={""} fetchUrl={"watch"} />
      <Footerpage />
    </div>
  );
};

export default SearchResult;
