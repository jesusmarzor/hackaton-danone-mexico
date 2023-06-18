"use client"
import { createContext, useContext } from "react";
import { useModulesController } from "hooks/useModulesController";

interface props {
    children: JSX.Element
}

const modulesControllerContext = createContext<any>(null);

export const ModulesControllerProvider: React.FC<props> = ({children}) => {
    const modulesController = useModulesController()
    return <modulesControllerContext.Provider value={modulesController}>{children}</modulesControllerContext.Provider>
}

export const ModulesControllerConsumer = () => {
    const context: any = useContext(modulesControllerContext)
    return context
}