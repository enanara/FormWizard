import React, { useState } from 'react';
import InputRow from '../components/InputRow';

function FirstPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
      <div>
        <InputRow
          labelText='First Name'
          className='first-name-input'
          inputText={firstName}
          callback={setFirstName}
        />
        <InputRow
          labelText='Last Name'
          className='first-name-input'
          inputText={lastName}
          callback={setLastName}
        />
        <InputRow
          labelText='Email'
          className='first-name-input'
          inputText={email}
          callback={setEmail}
        />
        <InputRow
          labelText='Phone Number' 
          className='first-name-input'
          inputText={phoneNumber}
          callback={setPhoneNumber}
        />
      </div>
    );
  }
  
  export default FirstPage;
  