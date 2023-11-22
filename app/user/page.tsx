'use client'
import React from "react";
import {useRouter} from "next/navigation";
import {AuthContextProvider, useAuthContext} from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import {useRecoilState} from "recoil";
import {CartContext} from "@/context/CartContext";
import CartList from "@/components/CartList";

function Page() {
    const {user} = useAuthContext()
    const router = useRouter()
    const [items, _] = useRecoilState(CartContext)

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <AuthContextProvider>
            <>
                <Navbar/>
                <CartList products={items}/>
            </>
        </AuthContextProvider>
    );
}

export default Page;
