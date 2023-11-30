import Image from 'next/image'
import React, { FC } from 'react'

type NftCardProps = {
  id:number,
  name:string,
  rarity:number,
  imageUrl:string
}

const NftCard: FC<NftCardProps> = ({ id,name,rarity,imageUrl }) => {
  const variant : 'white'|'black' = id % 2 === 0 ? 'white':'black'
  const renderStyle={
      black:'bg-[#222] text-[#D1D1D1]',
      white:'bg-white text-black'
  }[variant]
  return (
    <div className={`w-[138px] h-[200px] p-[6px] flex flex-col rounded-[13px] ${renderStyle}`}>
      <div className='w-full relative min-h-[120px] rounded-[9px] overflow-hidden'>
          <Image src={'/nftBg.webp'} alt='NFT Image' fill className='object-cover'/>
      </div>
      <div className='flex flex-col h-full items-center justify-evenly'>
        <p className=' font-medium'>Name</p>
        <span className=' text-xs font-medium'>0.00%</span>
      </div>
    </div>
  )
}

export default NftCard;