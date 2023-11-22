import React from 'react';
import Image from "next/image";
import {Product} from "@/app/type";
import {NumberToReais} from "@/helpers";

function CatalogItem({product, appendItems}: { product: Product, appendItems: (product: Product) => void }) {

    return (
        <div className='flex justify-center'>
            <div className='w-72 p-4 bg-yellow-200 m-12 flex flex-col'>
                <Image src={product.image} alt="" width={600} height={600}/>
                <div style={{height: '70%'}}>
                    <h1 className='text-center p-1 font-bold text-3xl'>{product.name}</h1>
                    <h3 className='text-justify'>{product.text}</h3>
                </div>
                <p className='text-center font-bold p-1'>{NumberToReais(product.price)}</p>
                <button className='bg-red-700 mx-auto block p-1 text-yellow-200 rounded-lg'
                        onClick={() => appendItems(product)}>
                    Adicionar compra
                </button>
            </div>
        </div>
    );
}

export default CatalogItem;
