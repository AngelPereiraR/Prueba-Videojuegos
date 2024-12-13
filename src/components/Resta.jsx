import React, { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

const Resta = ({ num1, num2 }) => {
  const { result, setResult } = useContext(ResultContext);
  return <div onClick={() => setResult(num1 + num2)}>Resta</div>;
};

export default Resta;
