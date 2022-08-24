import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    //dummy logout function for better ide autocomplete
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    
        if (storeUserLoggedInInfo === "1") {
          setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn", "1");
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider 
                value={{
                    isLoggedIn: isLoggedIn, 
                    onLogout: logoutHandler, 
                    onLogin: loginHandler,
                }}
            >
                {props.children}
            </AuthContext.Provider>;
};

export default AuthContext;

//use props mostly to pass values as it allows you to make components reuseable ie button component
//if you need to forward something through a lot of components or to a component that does something very specific consider using context

//NOT FOR HIGH FREQUENCY CHANGES
//Best for replacing long prop chains