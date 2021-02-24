import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginationComponent from "../Component/PaginationComponent";
import "../css/Album.scss";

interface Props {}

const Album = (props: Props) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setpostsPerPage] = useState(10);
  const loadData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/?_limit=50`)
      .then((res) => {
        const albumData = res.data;
        setData(albumData);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);
  console.log("data =>", data);

  const handlePages = (updatePage: number) => setCurrentPage(updatePage);

  return (
    <>
      <div className="category-container">
        <h1 className="mt-4 p-5 text-center">Top Gallary</h1>

        <div className="gallary-img">
          {currentData.map((item: any, index) => (
            <img src={item.url} alt="APi Image" />
          ))}
        </div>
      </div>
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        handlePagination={handlePages}
      />
    </>
  );
};

export default Album;
