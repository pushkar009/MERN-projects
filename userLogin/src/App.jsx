import React, { useState } from "react";
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Form submitted!');
    }
  };

  return (
    <>
      <form className="card-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Name: </label>
        <input
          type="text"
          name="name" required/>
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email" required/>
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)} required/>
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;
