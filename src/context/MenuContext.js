import { createContext, useReducer } from "react"
import MenuReducer from "./MenuReducer"

const INITIAL_STATE = {
    Menu: false
}

export const MenuContext = createContext(INITIAL_STATE)

export const MenuContextProvider = ({children}) =>{
    const [state, dispatchMenu] = useReducer(MenuReducer, INITIAL_STATE);

    return(
        <MenuContext.Provider value={{ Menu: state.Menu, dispatchMenu}}>
            {children}
        </MenuContext.Provider>
    )
}