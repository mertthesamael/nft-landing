import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React, { FC } from 'react'

type HeaderProps = {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className='w-full flex justify-center page-format fixed top-8 lg:top-[64px] z-20'>
            <div className='width-cap h-full w-full rounded-xl p-4 flex items-center bg-white justify-between'>
                <div className='w-full'>
                    <Logo />
                </div>
                <div className=' w-full hidden lg:flex justify-center items-center gap-6'>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Home</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Attributes</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Collection</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>Roadmap</Link>
                    <Link href={'/'} className='text-sm 2xl:text-lg text-black font-medium'>FAQ</Link>
                </div>
                <div className='w-full flex justify-end'>
                    <PrimaryButton variant='highlight' text='Connect Wallet' />
                </div>
            </div>
        </header>
    )
}

export default Header;