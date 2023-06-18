import FacebookIcon from 'components/ui/icons/FacebookIcon'
import InstagramIcon from 'components/ui/icons/InstagramIcon'
import TwitterIcon from 'components/ui/icons/TwitterIcon'

export const appLinks = [
  {
    id: 'nav-link-home',
    position: 'header',
    nameKey: 'common.home',
    route: '/'
  },
  {
    id: 'nav-link-products',
    position: 'header',
    nameKey: 'common.products',
    route: '/products'
  },
  {
    id: 'nav-link-login',
    position: 'top-header',
    nameKey: 'header.login.button',
    route: '/login'
  },
  {
    id: 'footer-link-news',
    position: 'footer',
    nameKey: 'common.news',
    route: ''
  },
  {
    id: 'footer-link-products',
    position: 'footer',
    nameKey: 'common.products',
    route: ''
  },
  {
    id: 'footer-link-contact',
    position: 'footer',
    nameKey: 'common.contact',
    route: ''
  },
  {
    id: 'footer-link-help',
    position: 'footer',
    nameKey: 'common.help',
    route: ''
  }
]

export const socialNetworks = [
  {
    id: 'footer-rs-instagram',
    link: 'https://instagram.com',
    icon: <InstagramIcon width='20' height='20' />
  },
  {
    id: 'footer-rs-facebook',
    link: 'https://facebook.com',
    icon: <FacebookIcon width='20' height='20' />
  },
  {
    id: 'footer-rs-twitter',
    link: 'https://twitter.com',
    icon: <TwitterIcon width='20' height='20' />
  }
]

export const languages = {
  EN: "en"
}