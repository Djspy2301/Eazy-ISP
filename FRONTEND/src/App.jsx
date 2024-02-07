import { useState } from "react";
import { SignUp } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
}

export default App;
