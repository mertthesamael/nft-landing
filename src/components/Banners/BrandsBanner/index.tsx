import React, { FC } from 'react'

type BrandsBannerProps = {
  
}
const trustedBrands = [
    {
        id:1,
        name:'Solana'
    },
    {
        id:2,
        name:'Solart'
    },
    {
        id:3,
        name:'DigitalEyes'
    },
    {
        id:4,
        name:'DyDx'
    },
    {
        id:5,
        name:'Binance'
    },
]
const BrandsBanner: FC<BrandsBannerProps> = ({  }) => {
  return (
    <div className='w-full flex flex-col  justify-evenly lg:flex-row px-10 2xl:px-20 lg:py-0 py-4 lg:gap-20 items-center h-[162px] bg-white rounded-[38px]'>
        <div className='min-w-[119px]'>
            <h3 className='font-bold text-black text-xl text-center lg:text-left'>We are tursted by</h3>
        </div>
        <div className='w-full flex justify-center lg:justify-between gap-6 flex-wrap '>
        {trustedBrands.map((el,_i) => (
            <div key={el.id} className='w-max h-full flex  gap-1 lg:gap-4 items-center'>
                <span className='bg-black hidden lg:flex h-4 lg:w-8 w-4 lg:h-8 rounded-full'/>
                <p className='font-bold text-black text-sm lg:text-xl'>{el.name}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BrandsBanner;