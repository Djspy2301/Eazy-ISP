import { useSelector } from 'react-redux';
import Login from './Login'
import Register from './Register';


const SignUp = () => {
    
  const isRegPg = useSelector((state) => state.regToggle.isRegPg)
  
  
  return (
    <>
      {isRegPg?<Register/>:<Login/>}
    </>  
  )
}

export default SignUp