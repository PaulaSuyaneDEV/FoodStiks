'use client'

import React from 'react';
import {Product} from "@/app/type";
import CartItem from "@/components/CartItem";
import {useAuthContext} from "@/context/AuthContext";
import {useRecoilState} from "recoil";
import {CartContext} from "@/context/CartContext";
import {NumberToReais} from "@/helpers";
import {addOrder} from "@/firebase/orders";
import {uuidv4} from "@firebase/util";
import Link from "next/link";
import {useRouter} from "next/navigation";

const CartList = ({products}: { products: Product[] }) => {
    const items = products.map(item => <CartItem key={item.id} product={item}/>)
    const {user} = useAuthContext()
    const {email} = user || {email: ''};
    const total = products.reduce((acc, item) => acc + item.price * item.quantidade, 0)
    const router = useRouter()

    const [_, setCartItems] = useRecoilState(CartContext)

    async function handleOrder() {
        const id = uuidv4();

        await addOrder(id, {
            id,
            email: email,
            products,
            status: 'pending',
            date: new Date().toISOString(),
            total
        })

        router.push("/orders")
    }

    const button = user && email ? <button
        className='text-right text-white py-3 px-10 mt-6 block  bg-red-600 rounded-xl font-bold'
        onClick={handleOrder}>Finalizar Compra
    </button> : <Link
        className='text-right text-white py-3 px-10 mt-6 block bg-red-600 rounded-xl font-bold block'
        href={"/login"}>Entrar e Finalizar Compra
    </Link>

    const clearCartButton = <button
        className='text-right text-white py-3 px-10 mt-6 block bg-red-600 rounded-xl font-bold'
        onClick={() => setCartItems([])}>Limpar Carrinho</button>

    if (products.length === 0) {
        return (<>
            <h1 className='text-black text-lg font-bold text-center mt-10'>Seu carrinho não possui nenhum item
                adicionado.</h1>
            <a href={"/"}
               className={"text-center w-1/3 mx-auto text-white py-3 px-10 mt-6 block bg-red-600 rounded-xl font-bold block"}>Voltar
                para o catálogo</a>
        </>)

    } else {
        return (
            <div className={"py-10 w-1/2 mx-auto"}>
                <h1 className={"text-3xl font-bold"}>Falta pouco para confirmamos seu pedido!</h1>
                {items}
                <h2 className='text-right text-2xl font-bold mt-5'>Total: {NumberToReais(total)}</h2>
                <div className={"flex mx-auto justify-between"}>
                    {button} {clearCartButton}
                </div>
            </div>
        )
    }

}
export default CartList
