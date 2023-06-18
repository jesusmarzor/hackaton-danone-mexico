interface IconProps {
    width, height: string
    fill?: string
}

interface Image {
    title: string
    url: string
}

interface Product {
    id, name, description: string
    num, cal: number
    image: Image
}