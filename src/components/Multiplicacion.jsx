import React from 'react';

const Multiplicacion = ({num1, num2}) => {

    const multiplicar = () => {
        console.log(num1 * num2);
    }

    return (
        <button onClick={() => multiplicar()}>
            Multiplicar
        </button>
    );
};

export default Multiplicacion;