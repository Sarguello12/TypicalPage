import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;

//use props mostly to pass values as it allows you to make components reuseable ie button component
//if you need to forward something through a lot of components or to a component that does something very specific consider using context