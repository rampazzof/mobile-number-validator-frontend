import React from "react";
import "../css/index.css";

const SingleResult = ({ validationData }) => {
  const getTextColor = (status) => {
    switch (status) {
      case "VALID":
        return "green";
      case "CORRECTED":
        return "yellow";
      case "NOT_VALID":
        return "red";
      default:
        return "black";
    }
  };
  if (validationData) {
    const { rawMobileNumber, mobileNumber, status } = validationData;
    return (
      <div className="flex-parent">
        <div className="flex-child">{rawMobileNumber}</div>
        <div className="flex-child">{mobileNumber || "KO"}</div>
        <div className="flex-child" style={{ color: getTextColor(status) }}>
          {status}
        </div>
      </div>
    );
  }
  return null;
};

export default SingleResult;
