"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { appLinks } from "utils/CONSTANTS"

export const ExternalLinks = () => {
    const { t } = useTranslation()
    const footerLinks = appLinks.filter( ({position}) => position == "footer")
    return(
        <nav>
            <ul className="flex justify-center items-center flex-wrap gap-6 xl:gap-56 text-xs">
                {
                    footerLinks.map( ({id, nameKey, route}) => {
                        return (
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