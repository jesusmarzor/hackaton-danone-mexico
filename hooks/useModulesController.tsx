"use client"
import { useEffect, useState } from "react"
import ContentfulApi from "utils/ContentfulApi"

export const useModulesController = () => {
    const [modulesController, setModulesController] = useState(null)
    useEffect( () => {
        getModulesController().then( mc => {
            setModulesController(mc)
        })
    }, [])
    return modulesController
}

const getModulesController = () => {
    const moduleController = ContentfulApi.getModulesController()
    return moduleController
}