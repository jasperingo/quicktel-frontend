import React from 'react';
import InputComponent from '../components/input-component';

export default function SignUpPage() {
  return (
    <div className="container">
      <form className="my-8 mx-auto p-4 rounded-xl shadow shadow-cyan-600 md:w-96">
        <InputComponent id="name-input" label="Name" />

        <InputComponent id="email-input" label="Email" />
        
        <InputComponent id="password-input" label="Password" />

      </form>
    </div>
  );
}
