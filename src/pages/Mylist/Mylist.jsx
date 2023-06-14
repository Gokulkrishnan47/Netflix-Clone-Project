import React, { useEffect, useState } from "react";
import { getlist } from "../../lib/axios/api-functions/mylist";
import DataRow from "../../components/Row/DataRow";

const Mylist = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getlist().then(({ data }) => setList(data));
  }, []);

  return (
    <div className="h-[100vh] bg-black text-white">
      <div>
        {list.length > 0 ? (
          <>
            <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">My List</h1>
            <DataRow searchmovie={""} fetchUrl={"mylist"} />
          </>
        ) : (
          <h1 className="text-xl text-center pt-[200px]  font-bold ">
            List is Empty
          </h1>
        )}
      </div>
    </div>
  );
};

export default Mylist;
