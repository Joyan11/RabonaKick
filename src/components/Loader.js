import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export const PuffLoader = () => {
  return (
    <Loader
      type="Puff"
      color="#55b17e"
      height={80}
      width={80}
      className="puff-loader"
    />
  );
};
