import React from 'react';
import './InputRow.css';

const InputRow = ({labelText, className}) => {
    return (
        <div className = {`input-row ${className}`}>
            <p>
                {labelText}
            </p>
            <input></input>
        </div>
    )
}

export default InputRow;