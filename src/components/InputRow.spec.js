import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import InputRow from './InputRow';

const renderInputRow = (props) => {
    return render(<InputRow {...props}/>);
}

describe('InputRow', () => {
    it('should exist ', () => {
        const {container} = renderInputRow();
        expect(container).toMatchSnapshot();
    });
    it('should call callback on change', () => {
        const callback = jest.fn();
        
        const {getByTestId} = renderInputRow({
            labelText: 'testing', 
            className:'input-row-testing', 
            callback, 
            inputText: '',
        });
        fireEvent.change(getByTestId('input-row-input'), {target: {value: 'bunnyRabbit'}});
        expect(callback).toHaveBeenCalledWith('bunnyRabbit');
    });
})