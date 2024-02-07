import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { togglePg } from "../../store/slices/signUp/regToggleSlice";
import { setUsername, setPassword } from "../../store/slices/signUp/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  
  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => dispatch(setPassword(e.target.value));

  const toggleLogPg = () => dispatch(togglePg());
  // console.log("Username:", username);
  // console.log("Password:", password);
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              input={username}
              inputChange={handleUsernameChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              input={password}
              inputChange={handlePasswordChange}
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
          <a href="#" className="text-blue-500" onClick={toggleLogPg}>
            Register here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
