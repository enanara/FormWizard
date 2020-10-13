import React, { Component } from 'react';

class ThirdPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <label htmlFor='occupation-input'>Occupation</label>
                <input
                    id='occupation-input'
                    placeholder='Teacher etc.'
                />
                <label htmlFor='birthday-input'>Occupation</label>
                <input
                    id='birthday-input'
                    type='calendar'
                />
            </div>
        );
    }
}

export default ThirdPage;
