export type Product = {
    "id": string,
    "name": string,
    "price": number,
    "image": string,
    "text": string,
    "quantidade": number
    available: boolean
}

export type Order = {
    id: string,
    email: string,
    products: Product[],
    status: "pending" | "paid" | "delivered" | "canceled"
    date: string
    total: number;
}


