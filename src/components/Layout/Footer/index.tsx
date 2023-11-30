import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React, { FC } from 'react'

type FooterProps = {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='w-full flex justify-center page-format absolute bottom-0  h-max lg:bottom-[32px]  z-20'>
            <div className='width-cap h-full w-full rounded-xl p-4 flex items-center bg-white justify-between'>
                <div className='w-full'>
                    <Logo />
                </div>
                <div className='lg:w-full min-w-max lg:flex justify-center items-center gap-6'>
                    <Link href={'https://merto.dev'} className='w-max text-[#B2B2B2]' target='_blank'>2023 Mert Enercan</Link>
                </div>
                <div className=' w-full hidden lg:flex justify-center items-center gap-6'>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Home</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Attributes</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Collection</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Roadmap</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>FAQ</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;