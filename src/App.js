import React from 'react';
import InputRow from './components/InputRow';
import './App.css';

function App() {
  return (
    <div>
      <InputRow
        labelText='First Name'
        className='first-name-input'
      />
      <InputRow
        labelText='Last Name'
        className='first-name-input'
      />
      <InputRow
        labelText='Email'
        className='first-name-input'
      />
      <InputRow
        labelText='Phone Number'
        className='first-name-input'
      />
    </div>
  );
}

export default App;
