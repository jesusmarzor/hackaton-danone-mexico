import Image from "next/image"
import Link from "next/link"
import { navLinks } from "utils/CONSTANTS"

export const Header = () => {
    return(
        <header className="flex h-24">
            <Image
            src="/logos/image2.png"
            width={300}
            height={300}
            alt="Danone header logo"
            style={{objectFit:"contain"}}
            />
            <nav>
                <ul>
                {
                    navLinks.map( ({name, route}) => {
                        return(
                            <li key={route}>
                                <Link href={route}>{name}</Link>
                            </li>
                        )
                    })
                }  
                </ul>
            </nav>
            
        </header>
    )
}