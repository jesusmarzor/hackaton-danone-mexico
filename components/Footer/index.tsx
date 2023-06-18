import { ExternalLinks } from "./ExternalLinks"
import { SocialNetworks } from "./SocialNetworks"

export const Footer = () => {
    return(
        <footer className="bg-lightBlue mt-auto">
            <div className="flex justify-center items-center flex-wrap py-8 px-10 max-w-7xl gap-6 mx-auto xl:justify-between">
                <ExternalLinks/>
                <SocialNetworks/>
            </div>
        </footer>
    )
}