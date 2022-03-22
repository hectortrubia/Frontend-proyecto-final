import { themeContext } from "./themeContext";
import { useState } from "react";

const lightTheme = {

    primary: "primary",
    secondary: "secondary"
}

const darkTheme = {

    primary: "secondary",
    secondary: "primary"
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