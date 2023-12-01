import { getNfts } from '@/actions/getNfts';
import NftCard from '@/components/Cards/NftCard';
import React, { FC } from 'react'

type NftsSectionProps = {

}

const NftsSection: FC<NftsSectionProps> = async ({ }) => {
    const nftData = await getNfts()
    return (
        <section className='w-full flex justify-center page-format  py-32 min-h-screen'>
            <div className='flex flex-col width-cap gap-20 relative w-full py-20 h-full'>
                <div>
                    <h1 className='text-[42px] lg:text-[64px] font-bold leading-[74px]'>NFT Pieces</h1>
                </div>
                <div className='flex flex-col gap-20'>
                    {Array(3).fill(0).map((el, _i) => (
                        <div key={_i} className='flex flex-col gap-6'>
                            <h2 className='text-[48px] font-bold'>Background</h2>
                            <div className='grid grid-cols-[repeat(auto-fill,_minmax(138px,_1fr))] gap-6'>
                                {nftData.map((el, _i) => (
                                    <NftCard key={_i} nft={el} />
                                ))}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default NftsSection;