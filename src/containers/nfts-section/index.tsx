import React, { FC } from 'react'

type NftsSectionProps = {

}

const NftsSection: FC<NftsSectionProps> = ({ }) => {
    return (
        <section className='w-full flex justify-center page-format  py-32 h-screen'>
            <div className='flex flex-col width-cap  relative w-full h-full'>
                <div>
                    <h1 className='text-[42px] lg:text-[64px] font-bold leading-[74px]'>NFT Pieces</h1>
                </div>
                <div>
                    <div>
                        <h2 className='text-[48px] font-bold'>Types</h2>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NftsSection;