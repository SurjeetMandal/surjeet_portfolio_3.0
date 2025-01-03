/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {

    const[modal, setModal] = useState(false)
    const[projectData, setProjectData] = useState({})
    
    const value = {
        modal,
        setModal,
        projectData,
        setProjectData
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
