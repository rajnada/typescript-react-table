import React, { useEffect, useState } from "react";
import TableRecords from "../Component/TableRecords";
import axios from "axios";

import * as _ from "lodash";

import PaginationComponent from "../Component/PaginationComponent";
import DialogLoader from "../Component/layout/DialogueLoader";
import Searchbar from "../Component/Searchbar";
import Header from "../Component/layout/Header";

const Table = () => {
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setpostsPerPage] = useState(10);
  const [isLoading, setisLoading] = useState(true);
  const [inputs, setInput] = useState("");

  const handlePages = (updatePage: number) => setCurrentPage(updatePage);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);

  const [filteredValue, setFiltered] = useState([]);

  const loadData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/?_limit=300")
      .then((res) => {
        console.log("res =>", res);
        const allData = res.data;
        setdata(allData);
      });
  };

  useEffect(() => {
    setisLoading(true);
    (async () => {
      await loadData();
    })();
    setisLoading(false);
  }, []);

  const updateInput = async (input: string) => {
    const filtered: any = currentData.filter((item: any) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setFiltered(filtered);
  };
  useEffect(() => {
    setFiltered([]);
  }, [indexOfFirstPage]);

  return (
    <div>
      <div>
        <Searchbar keyword={inputs} onChange={updateInput} />
      </div>
      <DialogLoader loading={isLoading} />
      <TableRecords
        records={filteredValue.length > 0 ? filteredValue : currentData}
      />
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        handlePagination={handlePages}
      />
    </div>
  );
};

export default Table;
