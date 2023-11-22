import React from 'react';
import Order from "./Order";

function OrderList({orders}: { orders: Order[] }) {

    const Orders = orders.map(o => <Order key={o.id} {...o}/>)

    return (
        <div
            className='bg-yellow-200 w-1/2 mx-auto py-5 px-6 gap-3 items-center justify-between'>
            <h1 className={"text-3xl font-bold"}>Seus Pedidos:</h1>
            {Orders}
        </div>
    );
}

export default OrderList;
