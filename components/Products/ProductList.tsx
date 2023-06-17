import { Product } from "components/Products/Product"

interface props {
    products: Product[]
}
export const ProductList: React.FunctionComponent<props> = ({products}) => {
    return(
        <ul>
            {
                products.map( ({slug, image, name, num, description, cal}) => {
                    return(
                        <li>
                            <Product slug={slug} image={image} name={name} num={num} description={description} cal={cal}/>
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}