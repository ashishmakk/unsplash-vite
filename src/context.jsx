import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkmode = () => {
    
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; 

    const storedDarkMode = localStorage.getItem('darkTheme') === 'true'; 

    return prefersDarkMode || storedDarkMode ; 
};

export const AppProvider = ({children}) => {

const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkmode());
const [searchTerm, setSearchTerm] = useState('beach');

const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    localStorage.setItem('darkTheme', newTheme)
}

useEffect(() => {document.body.classList.toggle('dark-mode', isDarkTheme);
}, [isDarkTheme]);

    return <AppContext.Provider value={{isDarkTheme, toggleTheme, searchTerm, setSearchTerm}}>
    {children}
    </AppContext.Provider>
 }


export const useGlobalContext = () => useContext(AppContext);  


