'use client'
import React from 'react';
import Image from 'next/image';
import home_img from '../public/assets/foodstips-back.jpg'

const Hero = () => {
    return <div className='w-full flex relatuive pt-px'>
        <div className='w-6/12 text-center p-6 '>
            <h1 className='text-5xl p-6 font-bold'>FoodStiks</h1>
            <p className=' text-3xl text-justify font-bold'>A lunmeal oferece a melhor experiência aos seus clientes,
                pois nela você pode experimentar diversos sabores variados de pizza com preços super acesssíveis para
                toda a sua família!</p>
            <button className='mt-10 mb-18 bg-red-700 text-white text-3xl p-4 rounded-2xl '>Faça seu pedido!</button>
        </div>
        <div className='w-6/12'>
            <Image src={home_img} alt="" width={690} height={800}/>
        </div>
    </div>
}

export default Hero
