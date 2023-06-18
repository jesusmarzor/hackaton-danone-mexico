import { Product } from "components/Products/Product"
import ContentfulApi from "utils/ContentfulApi"

export const  ProductList = async () => {
    const products: Product[] = await getProducts()
    return(
        <ul className="grid grid-cols-repeat18 gap-2 p-8">
            {
                products.map( ({slug, image, name}) => {
                    return(
                        <li className="mx-auto" key={slug}>
                            <Product slug={slug} image={image} name={name}/>
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}

const getProducts = () => {
    const products = ContentfulApi.getProducts()
    return products
}