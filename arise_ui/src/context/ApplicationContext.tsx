import React, {useState} from "react";

export interface AppContextVal {
    token?:string;
    role?:string;
    name?:string;
}
export const ApplicationContext = React.createContext<AppContextVal|null>(null) as React.Context<AppContextVal>;


export const useApplicationContext = (): AppContextVal => {
    const context = React.useContext(ApplicationContext);

    if (!context) {
        throw new Error(
            'useApplicationContext must be used within a ApplicationProvider'
        );
    }

    return context;
};
