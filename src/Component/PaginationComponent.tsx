import React from "react";

import "../css/pagination.scss";

//pagination
export interface Props {
  postsPerPage: number;
  totalPosts: number;

  handlePagination: (postsPerPage: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  handlePagination,
}) => {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumber.map((num) => (
          <li key={num} className="page-item">
            <a
              onClick={() => handlePagination(num)}
              href="!#"
              className="page-link"
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
