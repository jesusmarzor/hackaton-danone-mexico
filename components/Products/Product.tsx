import Image from "next/image"
import Link from "next/link"

interface props {
    slug: string
    name: string
    image: Image
}

export const Product: React.FunctionComponent<props> = ({slug, image, name}) => {
    return(
        <Link href={`products/${slug}`} className="group flex flex-col justify-end items-center rounded relative w-72 h-96 overflow-hidden bg-black bg-opacity-40 hover:bg-opacity-25">
            <Image
            className="absolute min-h-full object-cover -z-10 group-hover:scale-105"
            src={image.url}
            width={300}
            height={300}
            priority={true}
            alt={image.title}
            />
            <p className="text-white font-semibold p-3">{name}</p>
        </Link>
    )
}