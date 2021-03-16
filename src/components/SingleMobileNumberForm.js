import React, { useState } from "react";
import { useSingleMobileNumber } from "../hooks/MobileNumberHook";
import SingleResult from "./SingleResult";

const SingleMobileNumberForm = () => {
  const [mobileNumber, setMobileNumber] = useState(null);
  const { fetchData, response, loading } = useSingleMobileNumber();
  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          fetchData(mobileNumber);
          event.preventDefault();
        }}
      >
        <label htmlFor="singleInput">Enter mobile number</label>
        <input
          id="singleInput"
          type="text"
          onChange={(event) => setMobileNumber(event.target.value)}
        />
        <input type="submit" value="Validate"></input>
      </form>
      {response && <SingleResult validationData={response}></SingleResult>}
    </div>
  );
};

export default SingleMobileNumberForm;
