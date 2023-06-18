import Image from "next/image"
import ContentfulApi from "utils/ContentfulApi"

interface Params {
    id: string
}

interface props {
    params: Params
}

const ProductDetail: React.FunctionComponent<props> = async ({params})  => {
    const {slug, image, name, description, steps}: Product = await getProduct(params.id)
    return (
        <section>
            <h1 className="font-bold text-2xl text-center p-8">{name}</h1>
            <div className="flex justify-center items-center p-10 flex-wrap lg:flex-nowrap gap-2">
                <Image
                src={image.url}
                width={500}
                height={500}
                priority={true}
                alt={image.title}
                style={{objectFit:"cover"}}
                />
                <section className="flex flex-col pl-5">
                    <h2 className="font-semibold text-xl">Description</h2>
                    <p className="">{description}</p>
                </section>
            </div>
            <section className="flex flex-col px-10 py-5">
                <h2 className="font-semibold text-xl">Preparación</h2>
                <ol>
                {
                    steps.map( step => <li key={slug + step} className="list-decimal">{step}</li>)
                }
                </ol>
            </section>
        </section>
    )
}

export default ProductDetail

const getProduct = (id: string) => {
    const product = ContentfulApi.getProduct(id)
    return product
}