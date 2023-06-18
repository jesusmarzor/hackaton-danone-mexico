import InstagramIcon from "components/ui/icons/InstagramIcon"
import Link from "next/link"
import { socialNetworks } from "utils/CONSTANTS"

export const SocialNetworks = () => {
    return(
        <nav>
            <ul className="flex justify-center items-center flex-wrap gap-6 text-xs">
                {
                    socialNetworks.map( ({id, link, icon}) => {
                        return (
                            <li key={id}>
                                <Link href={link} target="_blank">
                                    {icon}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}