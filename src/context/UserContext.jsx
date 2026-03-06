import { loadState } from "@/config/storej";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [roles, setRoles] = useState("" || loadState("role"));
    return (
        <UserContext.Provider value={{ roles, setRoles }}>
            {children}
        </UserContext.Provider>
    );
};
