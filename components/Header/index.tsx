import Image from "next/image"
import { appLinks } from "utils/CONSTANTS"
import featuresConfig from "utils/featuresConfig"
import { Login } from "components/Header/Login"
import { NavLink } from "components/Header/NavLink"

export const Header = () => {
    const isLoginShow = (featuresConfig.showLoginSection)
    const loginLink = appLinks.find( ({id}) => id === "nav-link-login")
    return(
        <header className="flex flex-col">
            {
                isLoginShow && loginLink != undefined &&
                <Login name={loginLink?.name ?? ""} route={loginLink.route ?? ""}/>
            }
            <div className="flex justify-between items-center my-8 mx-10">
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
        </header>
    )
}