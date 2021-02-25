import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginationComponent from "../Component/PaginationComponent";

interface Props {}

const VideoGallary = (props: Props) => {
  const [data, setData] = useState([]);
  console.log("props =>", props);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setpostsPerPage] = useState(10);

  const loadData = () => {
    axios
      .get(`https://run.mocky.io/v3/da036b7a-2b30-4f80-92da-67fec868d196`)
      .then((res) => {
        console.log("res =>", res);
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
  const handlePages = (updatePage: number) => setCurrentPage(updatePage);

  return (
    <div>
      <div className="category-container">
        <h1 className="mt-4 p-5 text-center">Top Video Gallary</h1>
        <div className="gallary-img">
          {currentData.map((item: any, index) => (
            <video width="400" controls>
              <source src={item.sources} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        handlePagination={handlePages}
      />
    </div>
  );
};

export default VideoGallary;
