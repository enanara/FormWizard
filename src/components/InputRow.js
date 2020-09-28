import React from 'react';
import './InputRow.css';

const InputRow = ({labelText, className, callback, inputText}) => {
    const onType = (event) => {
        callback(event.target.value);
    }
    return (
        <div className = {`input-row ${className}`}>
            <p>
                {labelText}
            </p>
            <input
                data-testid = 'input-row-input'
                value = {inputText}
                onChange = {onType}
            />
        </div>
    )
}

export default InputRow;