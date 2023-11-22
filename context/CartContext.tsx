'use client'
import {atom} from "recoil"
import {Product} from "@/app/type";

export const CartContext = atom(
    {
        key: "carroSate",
        default: [] as Product []
    }
)
