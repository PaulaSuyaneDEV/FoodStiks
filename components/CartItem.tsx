import React from 'react';
import {Product} from "@/app/type";
import Image from "next/image";
import {NumberToReais} from "@/helpers";

function CartItem({product}: { product: Product }) {
    const {name, image, quantidade, price} = product
    return (
        <div>
            <div
                className='bg-yellow-200 mx-auto py-5 px-6 flex gap-3 items-center justify-between border-b-2 border-dashed border-red-500'>
                <Image width={200} height={300} src={image} alt="" className='p-2'/>
                <div>
                    <div className='font-bold text-2xl'>{name}</div>
                    <div>x{quantidade}</div>
                </div>
                <div className='text-3xl font-bold'> {NumberToReais(price * quantidade)}</div>
            </div>
        </div>
    )
}

export default CartItem;
