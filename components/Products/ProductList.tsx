import { Product } from "components/Products/Product"
import ContentfulApi from "utils/ContentfulApi"

export const  ProductList = async () => {
    const products: Product[] = await getProducts()
    return(
        <ul className="flex justify-center items-center gap-5 p-8">
            {
                products.map( ({id, image, name, num, description, cal}) => {
                    return(
                        <li key={id}>
                            <Product id={id} image={image} name={name} num={num} description={description} cal={cal}/>
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
    return (products)
  }