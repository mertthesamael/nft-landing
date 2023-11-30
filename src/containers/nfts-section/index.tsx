import NftCard from '@/components/Cards/NftCard';
import React, { FC } from 'react'

type NftsSectionProps = {

}

const NftsSection: FC<NftsSectionProps> = ({ }) => {
    return (
        <section className='w-full flex justify-center page-format  py-32 min-h-screen'>
            <div className='flex flex-col width-cap gap-20 relative w-full py-20 h-full'>
                <div>
                    <h1 className='text-[42px] lg:text-[64px] font-bold leading-[74px]'>NFT Pieces</h1>
                </div>
                <div className='flex flex-col gap-20'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-[48px] font-bold'>Types</h2>
                        <div className='grid grid-cols-[repeat(auto-fill,_minmax(138px,_1fr))] gap-6'>
                            {Array(10).fill(0).map((el,_i) => (
                                <NftCard key={_i} id={_i} name='Name' imageUrl='' rarity={1} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-[48px] font-bold'>Types</h2>
                        <div className='grid grid-cols-[repeat(auto-fill,_minmax(138px,_1fr))] gap-6'>
                            {Array(10).fill(0).map((el,_i) => (
                                <NftCard key={_i} id={_i} name='Name' imageUrl='' rarity={1} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-[48px] font-bold'>Types</h2>
                        <div className='grid grid-cols-[repeat(auto-fill,_minmax(138px,_1fr))] gap-6'>
                            {Array(10).fill(0).map((el,_i) => (
                                <NftCard key={_i} id={_i} name='Name' imageUrl='' rarity={1} />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-[48px] font-bold'>Types</h2>
                        <div className='grid grid-cols-[repeat(auto-fill,_minmax(138px,_1fr))] gap-6'>
                            {Array(10).fill(0).map((el,_i) => (
                                <NftCard key={_i} id={_i} name='Name' imageUrl='' rarity={1} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NftsSection;