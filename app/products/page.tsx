import { ProductList } from "components/Products/ProductList";
import ContentfulApi from "utils/ContentfulApi";

const Product = async () => {
  const products = await getProducts()
  return (
    <ProductList products={products}/>
  )
}

export default Product

const getProducts = () => {
  const products = ContentfulApi.getProducts()
  return products
}