import React, {useContext} from 'react';
import {ResultContext} from "../contexts/ResultContext.jsx";

const Suma = ({num1, num2}) => {

    const { result, setResult } = useContext(ResultContext);
    const sumar = () => {
        setResult(num1 + num2);
    }

    return (
        <button onClick={() => sumar()}>
            Sumar
        </button>
    );
};

export default Suma;