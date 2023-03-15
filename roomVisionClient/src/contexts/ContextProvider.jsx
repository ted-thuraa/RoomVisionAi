import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,

    setUser: () => {},

    setToken: () => {},
});

const initialState = {
    chat: false,
    cart: false,
    userprofile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [user, _setUser] = useState({});
    const [adminFlag, _setAdminFlag] = useState(false);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [admin_token, _setAdminToken] = useState(
        localStorage.getItem("ACCESS_TOKEN_ADMIN")
    );
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setUser = (user) => {
        _setUser(user);
        if (user) {
            localStorage.setItem("USER", user);
        } else {
            localStorage.removeItem("USER");
        }
    };

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
    };

    const handleClick = (clicked) =>
        setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            value={{
                user,
                token,

                setUser,
                setToken,

                currentColor,
                currentMode,
                activeMenu,
                screenSize,
                setScreenSize,
                handleClick,
                isClicked,
                initialState,
                setIsClicked,
                setActiveMenu,
                setCurrentColor,
                setCurrentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
