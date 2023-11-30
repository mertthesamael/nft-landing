import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';
import React, { FC } from 'react'

type HeroSectionProps = {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
    return (
        <section className='w-full flex justify-center page-format items-end py-32 h-screen'>
            <div className='flex flex-col lg:flex-row width-cap lg:items-end justify-evenly lg:justify-between relative w-full h-full'>
                <div className='w-full h-[300px] relative lg:hidden flex'>
                    <Image src={'/herobannermobile.png'} fill alt='Hero Banner' className='object-contain' />
                </div>
                <div className='flex flex-col  lg:text-left text-center lg:w-[414px] gap-4 lg:gap-10'>
                    <h1 className='text-[42px] lg:text-[64px] font-bold leading-[74px]'>NFT Collection Name</h1>
                    <p className='text-lg lg:text-2xl  font-extralight text-[#717171]'>Lorem ipsum dolor sit amen falan filan inter milan.</p>
                    <div>
                        <PrimaryButton variant='ghost' text='Learn More' />
                    </div>
                </div>
                <div className='relative right-0 top-0 hidden lg:flex w-[800px] h-full'>
                    <Image src={'/herobanner.png'} fill alt='Hero Banner' className='object-contain' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;