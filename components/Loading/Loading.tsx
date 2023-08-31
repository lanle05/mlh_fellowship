import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Loading() {
  return (
    <div style={{height:'20px'}} className=" justify-center items-center">
      <BounceLoader  color="#36d7b7" />
    </div>
  );
}
