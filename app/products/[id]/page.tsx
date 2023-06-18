import ContentfulApi from "utils/ContentfulApi"

interface Params {
    id: string
}

interface props {
    params: Params
}

const ProductDetail: React.FunctionComponent<props> = async ({params})  => {
    const {slug} = await getProduct(params.id)
    return (
        <main>
            <h1>{slug}</h1>
        </main>
    )
}

export default ProductDetail

const getProduct = (id: string) => {
    const product = ContentfulApi.getProduct(id)
    return product
}