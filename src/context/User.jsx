import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState("grumpy19");

    return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>;
};
