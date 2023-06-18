"use client"
import { useEffect, useState } from "react"
import ContentfulApi from "utils/ContentfulApi"

export const useModulesController = () => {
    const [modulesController, setModulesController] = useState(null)
    useEffect( () => {
        getModulesController().then( mc => {
            console.log("-----------")
            console.log(mc)
            console.log("-----------")
            setModulesController(mc)
        })
    }, [])
    return modulesController
}

const getModulesController = () => {
    const moduleController = ContentfulApi.getModulesController()
    return moduleController
}