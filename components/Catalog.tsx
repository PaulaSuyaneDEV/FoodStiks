'use client'

import React from 'react';
import {useRecoilState} from 'recoil'
import {CartContext} from '@/context/CartContext'
import toast from 'react-hot-toast';
import {Product} from "@/app/type";
import CatalogItem from "@/components/CatalogItem";

const Catalog = ({products}: { products: Product[] }) => {
    const [items, setCartItems] = useRecoilState(CartContext)

    const handleAppendToItems = (product: Product): void => {
        if (items.find(i => i.id === product.id)) {
            setCartItems(prevState => {
                return prevState.map((item) => {
                    return item.id === product.id ? {...item, quantidade: item.quantidade + 1} : item
                })
            })

        } else {
            setCartItems(prevState => [...prevState, product])
        }
        toast(`${product.name} Adicionado ao carrinho`)
    }

    const parsedProducts = products.map(product => <CatalogItem product={product} key={product.id}
                                                                appendItems={handleAppendToItems}/>)


    return (
        <>
            {parsedProducts}
        </>
    )

}

export default Catalog
