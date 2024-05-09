import { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";

const Login = ({toggleMode}) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const [errors, setErrors]=useState({})

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {username, password}
    // Validations(values);
    ;(async() => {
      try {
        const res = await axios.post('https://localhost:7026/api/Auth/login', formValue);
        setUsername('');
        setPassword('');
        
        const data = res.data;
        const session = data.data.id;
        const isAdmin = data.data.isAdmin;
        sessionStorage.setItem('id', session)
        sessionStorage.setItem('IsAdmin', isAdmin)
        console.log(data);
        console.log('isAdmin',isAdmin)
        if(!isAdmin){
          window.location.href='/user/profile'  
        }else{
          window.location.href='/admin/profile'
        }
        
        
      } catch (error) {
        console.log(error.message);
      }
    })()
    
    console.log(formValue)

  }

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              value = {username}
              onChange = {handleUsernameChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              value = {password}
              onChange = {handlePasswordChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500" onClick={toggleMode}>
            Register here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
