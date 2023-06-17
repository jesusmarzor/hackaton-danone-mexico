import FacebookIcon from "components/ui/icons/FacebookIcon"
import InstagramIcon from "components/ui/icons/InstagramIcon"
import TwitterIcon from "components/ui/icons/TwitterIcon"

export const appLinks = [
    {
        id: "nav-link-home",
        position: "header",
        name: "Home",
        route: "/"
    },
    {
        id: "nav-link-login",
        position: "top-header",
        name: "Login/Sign Up",
        route: "/login"
    },
    {
        id: "footer-link-news",
        position: "footer",
        name: "News",
        route: ""
    },
    {
        id: "footer-link-products",
        position: "footer",
        name: "Products",
        route: ""
    },
    {
        id: "footer-link-contact",
        position: "footer",
        name: "Contact",
        route: ""
    },
    {
        id: "footer-link-help",
        position: "footer",
        name: "Help",
        route: ""
    }
]

export const socialNetworks = [
    {
        id: "footer-rs-instagram",
        link: "https://instagram.com",
        icon: <InstagramIcon width="20" height="20"/>
    },
    {
        id: "footer-rs-facebook",
        link: "https://facebook.com",
        icon: <FacebookIcon width="20" height="20"/>
    },
    {
        id: "footer-rs-twitter",
        link: "https://twitter.com",
        icon: <TwitterIcon width="20" height="20"/>
    }
]