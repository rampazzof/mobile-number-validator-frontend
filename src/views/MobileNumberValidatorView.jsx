import React from "react";
import CsvMobileNumberForm from "../components/CsvMobileNumberForm";
import SingleMobileNumberForm from "../components/SingleMobileNumberForm";

const MobileNumberValidatorView = () => {
  return (
    <div className="mobileNumberValidatorWrapper">
      <SingleMobileNumberForm></SingleMobileNumberForm>
      <CsvMobileNumberForm></CsvMobileNumberForm>
    </div>
  );
};

export default MobileNumberValidatorView;
