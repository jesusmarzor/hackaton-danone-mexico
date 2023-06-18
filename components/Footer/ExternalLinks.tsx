import Image from "next/image"
import Link from "next/link"
import { appLinks } from "utils/CONSTANTS"

export const ExternalLinks = () => {
    const footerLinks = appLinks.filter( ({position}) => position == "footer")
    return(
        <nav>
            <ul className="flex justify-center items-center flex-wrap gap-6 xl:gap-56 text-xs">
                {
                    footerLinks.map( ({id, name, route}) => {
                        return (
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