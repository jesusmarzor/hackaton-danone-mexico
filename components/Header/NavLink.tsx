import Link from "next/link"
import { appLinks } from "utils/CONSTANTS"
import featuresConfig from "utils/featuresConfig"

export const NavLink = () => {
    const headerLinks = appLinks.filter(({position}) => position === "header")
    return(
        <nav className="text-main950 font-semibold text-sm">
            <ul className="flex justify-center items-center gap-3 min-h-full">
            {
                headerLinks.map( ({name, route}) => {
                    return(
                        <li key={route}>
                            <Link href={route}>{name}</Link>
                        </li>
                    )
                })
            }  
            </ul>
        </nav>
    )
}