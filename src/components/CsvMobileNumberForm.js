import React from "react";
import { useCsvMobileNumber } from "../hooks/MobileNumberHook";
import CsvResult from "./CsvResult";

const CsvMobileNumberForm = () => {
  const { fetchData, response } = useCsvMobileNumber();

  return (
    <div>
      <form>
        <label htmlFor="csvUploadFile">Or upload CSV</label>
        <input
          id="csvUploadFile"
          type="file"
          onChange={(event) => {
            fetchData(event.target.files[0]);
          }}
        />
      </form>
      {response && <CsvResult validationData={response}></CsvResult>}
    </div>
  );
};

export default CsvMobileNumberForm;
