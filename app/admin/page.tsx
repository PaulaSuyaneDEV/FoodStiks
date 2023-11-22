'use client'
import React, {useEffect, useState} from "react";

import {useRouter} from "next/navigation";
import {AuthContextProvider, useAuthContext} from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import {getAllProducts, setAvailability} from "@/firebase/products";
import {Product} from "@/app/type";
import {NumberToReais} from "@/helpers";

function Page() {
    const {user} = useAuthContext()
    const router = useRouter()
    const [products = [], setProducts] = useState<Product[]>([])

    console.log(products)

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const handleUpdateProductAvailability = async (id: string, available: boolean) => {
        const {result, error} = await setAvailability(id, available);

        if (!error) {
            const newProducts = products.map(product => {
                if (product.id === id) {
                    return {...product, available}
                }

                return product
            })

            setProducts(newProducts)
        }

    }

    useEffect(() => {
        async function fetchProducts() {
            const {result: data} = await getAllProducts();

            setProducts(data)
        }

        fetchProducts()

    }, [])

    const productElement = products && products.map(product => (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mt-5" key={product.id}>
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover"
                     src={product.image}
                     alt=""/>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                            {product.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                            {product.text}
                        </p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <span className="sr-only">{product.name}</span>
                            <img className="h-10 w-10 rounded-full"
                                 src={product.image}
                                 alt=""/>
                        </a>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                                {product.name}
                            </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">
                                {NumberToReais(product.price)}
                            </time>
                        </div>
                    </div>
                </div>
                <label htmlFor="available" className={"mt-5"}>Disponivel?
                    <input type={"checkbox"} className={"ml-3"} checked={product.available}
                           onChange={() => handleUpdateProductAvailability(product.id, !product.available)}/>
                </label>
            </div>
        </div>
    ))

    return (
        <AuthContextProvider>
            <>
                <Navbar/>
                <div
                    className='bg-yellow-200 w-1/2 mx-auto py-5 px-6 gap-3 items-center justify-between'>
                    <h1 className={"text-3xl font-bold"}>Gestão de Produtos</h1>

                    <div className={"flex flex-col"}>

                        {productElement}
                    </div>

                </div>
            </>
        </AuthContextProvider>);
}

export default Page;
