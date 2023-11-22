'use client'

import React from 'react';
import Navbar from '@/components/Navbar';
import {useRecoilState} from 'recoil'
import {CartContext} from '@/context/CartContext';
import CartList from '@/components/CartList'

const Page = () => {

    const [items, _] = useRecoilState(CartContext)

    return (
        <div>
            <Navbar/>

            <div className='container mx-auto'>
                <CartList products={items}></CartList>
            </div>
        </div>)
}


export default Page
