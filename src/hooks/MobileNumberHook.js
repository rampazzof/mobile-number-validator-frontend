import { useState } from "react";

export const useSingleMobileNumber = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (mobileNumber) => {
    setLoading(true);
    console.log(`fetchData call with ${mobileNumber}`);
    try {
      const response = await fetch("http://localhost:8080/api/v1/validate", {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ mobileNumber: mobileNumber }),
      });
      const responseData = await response.json();
      setResponse(responseData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { fetchData, loading, error, response };
};

export const useCsvMobileNumber = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (file) => {
    console.log("fetching csv data");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:8080/api/v1/upload/csv", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      setResponse(responseData);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  };
  return { fetchData, loading, error, response };
};
