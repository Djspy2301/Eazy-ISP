import React from "react";
import ToggleContext from "./ToggleContext";

const ToggleContextProvider = ({children}) => {

    const [regPg, setRegPg] = React.useState(false);

    return(
        <ToggleContext.Provider value={{regPg, setRegPg}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider;