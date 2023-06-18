"use client"
import Image from "next/image"
import { appLinks } from "utils/CONSTANTS"
import { Login } from "components/Header/Login"
import { NavLink } from "components/Header/NavLink"
import { ModulesControllerConsumer } from "contexts/ModulesControllerContext"
import ModuleStatus from "utils/ModuleStatus"

export const Header = () => {
    const moduleController = ModulesControllerConsumer()
    const isLoginShow = moduleController?.login?.status === ModuleStatus.ENABLED
    const loginLink = appLinks.find( ({id}) => id === "nav-link-login")
    return(
        <header>
            <div className="flex flex-col max-w-7xl mx-auto">
                {
                    isLoginShow && loginLink != undefined &&
                    <Login name={loginLink?.name ?? ""} route={loginLink.route ?? ""}/>
                }
                <div className="flex justify-between items-center py-8 px-10">
                    <Image
                    src="/logos/image3.png"
                    width={150}
                    height={100}
                    priority={true}
                    alt="Danone header logo"
                    style={{objectFit:"cover"}}
                    />
                    <NavLink/>
                </div>
            </div>
        </header>
    )
}