'use client'

const Footer = () => {
    return <div className='bg-red-700 text-white align-center justify-between p-1 w-full'
                style={{
                    flexGrow: 0, flexShrink: 0,
                    flexBasis: 'auto'
                }}>
        <div className='flex items-center justify-center gap-2'>
            <img src={'/assets/icon_pizza.png'} alt=""/>
            <p>Todos os direitos reservados FoodStiks</p></div>
        <div className='flex items-center justify-center'>
            <p>CNPJ: 000000000000000</p>
        </div>
        <div className='flex items-center justify-center pr-4'>
            <img src={'/assets/instagram.png'} alt="" width={40}/>
        </div>
    </div>
}
export default Footer
