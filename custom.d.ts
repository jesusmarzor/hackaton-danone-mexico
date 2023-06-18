interface IconProps {
    width, height, fill?, classesName?: string
}

interface Image {
    title: string
    url: string
}

interface Product {
    slug, name, description: string
    num, cal: number
    image: Image
    steps: string[]
}

interface ModuleConfig {
    status: string
}