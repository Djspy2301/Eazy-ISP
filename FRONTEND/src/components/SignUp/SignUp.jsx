import Login from './Login'
import Register from './Register';
import { useContext, useState } from 'react';



const SignUp = () => {
   
  const [isReg, setIsReg]=useState(false);

  const toggleMode = () =>{
    setIsReg(!isReg);
  }
  
  return (
    <>
      {isReg?<Register toggleMode={toggleMode}/>:<Login toggleMode={toggleMode}/>}
    </>  
  )
}

export default SignUp