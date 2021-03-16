import React from "react";
import SingleResult from "./SingleResult";

const CsvResult = ({ validationData }) => {
  return (
    <div>
      {validationData &&
        validationData.validationResponseList.map((element, i) => (
          <div key={i}>
            <SingleResult validationData={element}></SingleResult>
          </div>
        ))}
    </div>
  );
};
export default CsvResult;
