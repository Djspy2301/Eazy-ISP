import Login from './Login'
import Register from './Register';
import { useContext } from 'react';
import ToggleContext from '../../context/signup/ToggleContext';


const SignUp = () => {
    
  const {regPg} = useContext(ToggleContext);
  
  return (
    <>
      {regPg?<Register/>:<Login/>}
    </>  
  )
}

export default SignUp