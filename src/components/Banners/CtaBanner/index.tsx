import CtaButton from '@/components/Buttons/CtaButton';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import React, { FC } from 'react'

type CtaBannerProps = {
  
}

const CtaBanner: FC<CtaBannerProps> = ({  }) => {
  return (
    <div className='w-full rounded-[27px] p-3 flex flex-col gap-6 bg-[#EFEFEF] '>
     <div>
        <h1 className='text-[18px] lg:text-[36px] 2xl:text-[52px] text-black font-bold'>A pack of unique generative 10.000 collectible NFT cards with randomly generated set of attributes.</h1>
     </div>
     <div className='grid gr grid-cols-2 lg:flex w-full items-center gap-2'>
        <CtaButton variant='badge' text='Get from DigitalEyes'/>
        <CtaButton variant='ghost' text='Get from DigitalEyes'/>
        <CtaButton variant='ghost' text='Get from DigitalEyes'/>
        <CtaButton variant='ghost' text='Get from DigitalEyes'/>
     </div>
    </div>
  )
}

export default CtaBanner;