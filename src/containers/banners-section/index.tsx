import BrandsBanner from '@/components/Banners/BrandsBanner';
import CtaBanner from '@/components/Banners/CtaBanner';
import React, { FC } from 'react'

type BannerSectionProps = {
  
}

const BannerSection: FC<BannerSectionProps> = ({  }) => {
  return (
    <section className='w-full flex justify-center page-format h-screen'>
        <div className='w-full gap-[80px] lg:gap-[166px] h-full flex flex-col width-cap '>
            <BrandsBanner />
            <CtaBanner />
        </div>
    </section>
  )
}

export default BannerSection;