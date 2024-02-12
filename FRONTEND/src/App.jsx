import { SignUp } from "./components";
import ToggleContextProvider from "./context/signup/ToggleContextProvider";

function App() {
  return (
    <ToggleContextProvider>
      <SignUp />
    </ToggleContextProvider>
  );
}

export default App;
