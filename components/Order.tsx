import React from 'react';
import {Order} from "@/app/type";
import {NumberToReais, toLocaleDateString} from "@/helpers";

const statusToText = (status: Order['status']) => {
    switch (status) {
        case 'pending':
            return <span
                className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pagamento Pendente</span>
        case "delivered":
            return <span
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Entregue</span>
        case 'paid':
            return <span
                className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Pago</span>
        case 'canceled':
            return <span
                className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Cancelado</span>
        default:
            return <span
                className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Erro</span>
    }
}

function Order(order: Order) {

    return (
        <div className={"border-b-2 border-dashed border-red-500 pt-2"}>
            <h1>Pedido de {toLocaleDateString(order.date)} -
                Total: {NumberToReais(order.total)} - {statusToText(order.status)} </h1>
            <ul>
                {order.products.map(p => <li key={p.id} style={{textAlign: 'right'}}>{p.name} - {p.quantidade}x</li>)}
                <li style={{textAlign: 'right', paddingBottom: 10}}>
                    {order.status === "pending" && (
                        <button
                            className={'bg-red-700 w-[100px] block p-1 text-yellow-200 rounded-lg inline'}> Pagar
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Order;
