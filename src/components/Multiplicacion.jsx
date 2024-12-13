import React, {useContext} from 'react';
import {ResultContext} from "../contexts/ResultContext.jsx";

const Multiplicacion = ({num1, num2}) => {
    const { result, setResult } = useContext(ResultContext);

    const multiplicar = () => {
        setResult(num1 * num2);
    }

    return (
        <button onClick={() => multiplicar()}>
            Multiplicar
        </button>
    );
};

export default Multiplicacion;