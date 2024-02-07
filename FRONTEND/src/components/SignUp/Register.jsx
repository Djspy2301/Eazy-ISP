import { useDispatch, useSelector } from "react-redux";
import { togglePg } from "../../store/slices/signUp/regToggleSlice";
import {
  setBrand,
  setName,
  setUsername,
  setEmail,
  setPhone,
  setPassword,
  setCPassword,
} from "../../store/slices/signUp/registerSlice";
import Input from "../Input/Input";

const Register = () => {
  const dispatch = useDispatch();

  const { brand, name, username, email, phone, password, cpassword } =
    useSelector((state) => state.register);

  const handleBrandChange = (e) => dispatch(setBrand(e.target.value));

  const handleNameChange = (e) => dispatch(setName(e.target.value))

  const handleUsernameChange = (e) => dispatch(setUsername(e.target.value));

  const handleEmailChange = (e) => dispatch(setEmail(e.target.value))

  const handlePhoneChange = (e) => dispatch(setPhone(e.target.value));

  const handlePasswordChange = (e) => dispatch(setPassword(e.target.value))

  const handleCPasswordChange = (e) => dispatch(setCPassword(e.target.value));

  const toggleRegPg = () => dispatch(togglePg())

  // console.log("Brand Name:", brand);
  // console.log("Name:", name);
  // console.log("Username:", username);
  // console.log("Email:", email);
  // console.log("Phone:", phone);
  // console.log("Password:", password);
  // console.log("Confirm Password:", cpassword);
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>

        <form>
          <div className="mb-4">
            <Input
              label="Brand Name"
              type="text"
              input={brand}
              inputChange={handleBrandChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Name"
              type="text"
              input={name}
              inputChange={handleNameChange}
            />
          </div>

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
              label="Email"
              type="email"
              input={email}
              inputChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Phone"
              type="text"
              input={phone}
              inputChange={handlePhoneChange}
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

          <div className="mb-4">
            <Input
              label="Confirm Password"
              type="password"
              input={cpassword}
              inputChange={handleCPasswordChange}
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
          <a href="#" className="text-blue-500" onClick={toggleRegPg}>
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
