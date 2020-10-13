import React, { useReducer } from 'react';

const initialState = {
    firstLine: '',
    secondLine: '',
    thirdLine: '',
    country: '',
    postcode: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstLine':
            return { ...state, firstLine: action.value };
        case 'secondLine':
            return { ...state, secondLine: action.value };
        case 'thirdLine':
            return { ...state, thirdLine: action.value };
        case 'country':
            return { ...state, country: action.value };
        case 'postcode':
            return { ...state, postcode: action.value };
        default : throw new Error();
    }
}
function SecondPage() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Address:</p>
            <input
                value={state.firstLine}
                onChange={(event) => dispatch({ type: 'firstLine', value: event.target.value })}
                placeholder='First line of address'
            />
            <input
                value={state.secondLine}
                onChange={(event) => dispatch({ type: 'secondLine', value: event.target.value })}
                placeholder='Second line of address'
            />
            <input
                value={state.thirdLine}
                onChange={(event) => dispatch({ type: 'thirdLine', value: event.target.value })}
                placeholder='Third line of address'
            />
            <input
                value={state.country}
                onChange={(event) => dispatch({ type: 'country', value: event.target.value })}
                placeholder='Country'
            />
            <input
                value={state.postcode}
                onChange={(event) => dispatch({ type: 'postcode', value: event.target.value })}
                placeholder='Postcode'
            />
            <button>Submit</button>
        </div>
    );
}

export default SecondPage;
