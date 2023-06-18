'use client';
import { ModulesControllerProvider } from "contexts/ModulesControllerContext";
import "config/i18n"

interface props {
    children: JSX.Element
}

const Providers: React.FunctionComponent<props> = ({children}) => {
    return (
        <ModulesControllerProvider>
        {children}
        </ModulesControllerProvider>
    );
}

export default Providers