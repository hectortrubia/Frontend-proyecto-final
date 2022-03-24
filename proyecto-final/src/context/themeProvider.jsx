import { themeContext } from "./themeContext";
import { useState } from "react";

const lightTheme = {

    primary: "lightground",
    secondary: "lighttypo"
}

const darkTheme = {

    primary: "darkground",
    secondary: "darktypo"
}


function ThemeProvider({ children }) {

    const [theme, updateTheme] = useState(lightTheme)
    const [logName, setLogName] = useState ('')
    const changeTheme = () => {
        updateTheme(v => v === lightTheme ? darkTheme : lightTheme)
    }

    return <themeContext.Provider value={[theme, updateTheme, changeTheme, logName, setLogName]}>{children}</themeContext.Provider>

}

export default ThemeProvider