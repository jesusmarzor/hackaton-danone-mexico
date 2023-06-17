import Link from "next/link"
import { appLinks } from "utils/CONSTANTS"

export const NavLink = () => {
    const headerLinks = appLinks.filter(({position}) => position === "header")
    return(
        <nav className="text-main950 font-semibold text-sm">
            <ul className="flex justify-center items-center gap-3 min-h-full">
            {
                headerLinks.map( ({id, name, route}) => {
                    return(
                        <li key={id}>
                            <Link href={route}>{name}</Link>
                        </li>
                    )
                })
            }  
            </ul>
        </nav>
    )
}