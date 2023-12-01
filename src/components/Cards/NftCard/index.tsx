import { TNft } from '@/types/TNft'
import Image from 'next/image'
import React, { FC } from 'react'

type NftCardProps = {
  nft:TNft
}

const NftCard: FC<NftCardProps> = ({ nft }) => {
  const variant : 'white'|'black' = nft.id % 2 === 0 ? 'white':'black'
  const renderStyle={
      black:'bg-[#222] text-[#D1D1D1]',
      white:'bg-white text-black'
  }[variant]
  return (
    <div className={`w-[138px] h-[200px] p-[6px] flex flex-col rounded-[13px] ${renderStyle}`}>
      <div className='w-full relative min-h-[120px] rounded-[9px] overflow-hidden'>
          <Image priority src={nft.img} alt='NFT Image' fill className='object-cover'/>
      </div>
      <div className='flex flex-col h-full items-center justify-evenly'>
        <p className=' font-medium'>{nft.name}</p>
        <span className=' text-xs font-medium'>{(nft.rarity*100).toFixed(2)}%</span>
      </div>
    </div>
  )
}

export default NftCard;