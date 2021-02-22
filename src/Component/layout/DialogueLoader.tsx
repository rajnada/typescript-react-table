import React from "react";
import { ClipLoader } from "react-spinners";

export interface Props {
  loading: boolean;
}

//loader
const DialogLoader: React.FC<Props> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="dialog-loader">
          <ClipLoader size={40} color={"#808080"} loading={loading} />
        </div>
      )}
    </>
  );
};

export default DialogLoader;
