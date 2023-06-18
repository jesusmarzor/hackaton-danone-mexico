import { ExternalLinks } from "./ExternalLinks"
import { SocialNetworks } from "./SocialNetworks"

export const Footer = () => {
    return(
        <footer className="bg-lightBlue mt-auto">
            <div className="flex justify-between items-center flex-wrap py-8 px-10 max-w-7xl mx-auto">
                <ExternalLinks/>
                <SocialNetworks/>
            </div>
        </footer>
    )
}