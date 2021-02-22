import React from "react";
import { Table } from "reactstrap";

import Records from "../interface";

interface RecordsProps {
  records: Records[];
}

//table
const TableRecords = ({ records }: RecordsProps) => {
  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>ID</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default TableRecords;
