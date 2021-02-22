import React, { useState, useRef } from "react";

export interface Props {
  keyword: string;
  onChange: any;
}

const Searchbar: React.FC<Props> = ({
  keyword: keyword,
  onChange: setKeyword,
}) => {
  const BarStyling = {
    display: "flex",
    margin: "35px auto",
    width: "31rem",
    height: "2rem",
    background: "rgb(242, 241, 249)",
    border: "1.5px solid black",
    padding: "0.5rem",
    fontSize: "16px",
  };

  return (
    <div>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search name here..."}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
