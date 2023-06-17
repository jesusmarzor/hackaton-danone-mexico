import { ExternalLinks } from "./ExternalLinks"
import { SocialNetworks } from "./SocialNetworks"

export const Footer = () => {
    return(
        <footer className="flex justify-between items-center bg-lightBlue py-8 px-10">
            <ExternalLinks/>
            <SocialNetworks/>
        </footer>
    )
}