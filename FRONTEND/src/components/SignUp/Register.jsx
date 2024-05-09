import Input from "../Input/Input";
import { useContext, useEffect, useState } from "react";
import axios from "axios";


const Register = ({toggleMode}) => {
  const [brand, setBrand] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  let formValue={};
  
  const handleBrandChange = (e) => setBrand(e.target.value);

  const handleNameChange = (e) => setName(e.target.value);

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleCPasswordChange = (e) => setCPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Date.now();
    let isAdmin = true;
    formValue = {id, brand, username, name, email, phone, password, isAdmin}
    //console.log("formvalue:",formValue);

    ;(async() => {
      try {
        const res = await axios.post('https://localhost:7026/api/Auth/', formValue);
        toggleMode()
        //console.log(res);
      } catch (error) {
        console.log(error.message);
      }

    })()

  };
  

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Brand Name"
              type="text"
              value={brand}
              onChange={handleBrandChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Phone"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Confirm Password"
              type="password"
              value={cpassword}
              onChange={handleCPasswordChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-500" onClick={toggleMode}>
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
