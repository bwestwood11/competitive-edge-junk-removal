"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("fd120835-9185-402c-ab6f-36621cbd7fed")
    }, [])

    return null
}