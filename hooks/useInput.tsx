"use client"
import { useEffect, useState } from "react"
import { isEmpty } from "utils/VALIDATIONS"

export const useInput = (products: Product[]) => {
    const [text, setText] = useState<string>("")
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([])

    useEffect( () => {
        isEmpty(text) ?
        setProductsFiltered(products) :
        setProductsFiltered(products.filter(({name}) => name.toLowerCase().includes(text.toLowerCase())))
    }, [text])

    const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setText(e.target.value) : setText("")
    }

    return {text, changeText, productsFiltered}
}