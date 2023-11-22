'use client'

import React from 'react';
import {RecoilRoot} from "recoil";
import {Toaster} from "react-hot-toast";
import './globals.css'


function Body({children}: { children: React.ReactNode }) {
    return (

        <body style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <>
            <Toaster position='bottom-center'/>
            <RecoilRoot>{children}</RecoilRoot>
        </>
        </body>
        
    );
}

export default Body;
