import Link from "next/link"
import { useTranslation } from "react-i18next"
import { appLinks } from "utils/CONSTANTS"

export const NavLink = () => {
    const { t } = useTranslation()
    const headerLinks = appLinks.filter(({position}) => position === "header")
    return(
        <nav className="text-main950 font-semibold text-sm">
            <ul className="flex justify-center items-center gap-3 min-h-full">
            {
                headerLinks.map( ({id, nameKey, route}) => {
                    return(
                        <li key={id}>
                            <Link href={route}>{t(nameKey)}</Link>
                        </li>
                    )
                })
            }  
            </ul>
        </nav>
    )
}