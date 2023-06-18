"use client"
import { Product } from "components/Products/Product"
import { Input } from "components/ui/Input"
import { useInput } from "hooks/useInput"
import { useTranslation } from "react-i18next"

interface props {
    products: Product[]
}

export const  ProductList: React.FunctionComponent<props> = ({products}) => {
    const { t } = useTranslation()
    const {text, changeText, productsFiltered} = useInput(products)
    return(
        <>
            <Input title={t("common.search")} changeText={changeText}/>
            {
                 productsFiltered.length === 0 ?
                 <p className="p-8 text-center">{`"${text}" not found`}</p> :
                 <ul className="grid grid-cols-repeat18 gap-2 p-8">
                 {
                     productsFiltered.map( ({slug, image, name}) => {
                         return(
                             <li className="mx-auto" key={slug}>
                                 <Product slug={slug} image={image} name={name}/>
                             </li>
                         )
                     }
                     )
                 }
             </ul>
            }
        </>
    )
}
