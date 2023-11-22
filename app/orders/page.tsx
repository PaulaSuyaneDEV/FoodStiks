'use client'

import React from 'react';
import {useRouter} from "next/navigation";
import {useAuthContext} from "@/context/AuthContext";
import {getOrders} from "@/firebase/orders";

import {User} from "@firebase/auth";
import Navbar from "@/components/Navbar";
import OrderList from "@/components/OrderList";

function Page() {
    const router = useRouter()
    const {user} = useAuthContext()

    const [orders, setOrders] = React.useState<any>([])

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    React.useEffect(() => {
        loadOrders(user)

        async function loadOrders(user: User) {
            if (user && user.email) {
                const {result: orders} = await getOrders(user.email)

                console.log({orders})

                if (orders) {
                    setOrders(orders)
                }
            }
        }

    }, [user])


    return (
        <div>
            <Navbar/>


            <OrderList orders={orders}/>
        </div>
    );
}

export default Page;
