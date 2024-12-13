import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

const Division = ({ num1, num2 }) => {
  const { result, setResult } = useContext(ResultContext);
  return <button onClick={() => setResult(num1 + num2)}>Division</button>;
};

export default Division;
