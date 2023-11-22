export const NumberToReais = (value: number) => {
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}


export const toLocaleDateString = (date: string) => {
    return new Date(date).toLocaleDateString('pt-br');
}
