import Image from 'next/image'
import React, { FC } from 'react'

type AttributesSectionProps = {
  
}
const AttributesSection: FC<AttributesSectionProps> = ({  }) => {
  return (
    <section className='w-full flex justify-center page-format relative overflow-hidden py-32 items-end h-screen'>
    <div className='flex flex-col lg:flex-row width-cap lg:items-end justify-evenly lg:justify-between  w-full h-full'>
        <div className='w-full h-[300px] relative lg:hidden flex'>
            <Image src={'/herobannermobile.png'} fill alt='Hero Banner' className='object-contain' />
        </div>
        <div className='flex flex-col  lg:text-left text-center lg:w-[803px] gap-4 lg:gap-10 relative z-10'>
            <h1 className='text-[42px] lg:text-[64px] font-bold leading-[74px]'>About Your Unique NFT Collection</h1>
            <p className='text-lg lg:text-2xl  font-extralight text-[#717171]'>Lorem ipsum dolor sit amet consectetur. Non mi donec arcu malesuada semper pellentesque velit nec. In risus donec non tempus hac. Faucibus lobortis commodo vitae sit elementum. Volutpat eu varius sagittis molestie.Lorem ipsum dolor sit amet consectetur. Non mi donec arcu malesuada semper pellentesque velit nec. In risus donec non tempus hac.</p>
        </div>
        <div className='absolute -right-10 top-0 hidden lg:flex w-[800px] h-full '>
            <Image src={'/herobannermobile.png'} fill alt='Hero Banner' className='object-contain rotate-[30deg]' />
        </div>
    </div>
</section>
  )
}

export default AttributesSection;