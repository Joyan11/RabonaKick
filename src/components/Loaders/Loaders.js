import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const DotsLoader = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#fff"
      height={10}
      width={40}
      className="action-laoder"
    />
  );
};

export const OvalLoader = () => {
  return (
    <Loader
      type="TailSpin"
      color="#e24f4f"
      height={25}
      width={25}
      className="action-laoder"
    />
  );
};
