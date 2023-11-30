import RoadmapCard from '@/components/Cards/RoadmapCard';
import { RoadmapLines } from '@/components/Vectors/RoadmapLines';
import React, { FC } from 'react'

type FaqSectionProps = {

}

const FaqSection: FC<FaqSectionProps> = ({ }) => {
    return (
        <section className='w-full flex justify-center page-format  py-32 min-h-screen'>
            <div className='flex flex-col width-cap py-24 lg:py-64 relative w-full h-full'>
                <div className='w-full flex lg:px-[21rem] justify-center h-full relative'>
                    <div className='lg:w-[951px] w-max lg:min-w-[951px] h-full flex flex-col items-center gap-[38px]'>
                        <div className='w-full flex lg:justify-start relative z-10'>
                            <RoadmapCard variant='active' />
                        </div>
                        <div className='w-full lg:justify-end flex flex-col lg:flex-row items-center gap-8 relative z-10'>
                            <span className='text-white font-bold text-2xl'>Q1 2024</span>
                            <RoadmapCard variant='ongoing' />
                        </div>
                        <div className='w-full lg:justify-start flex flex-col-reverse lg:flex-row items-center gap-8 relative z-10'>
                            <RoadmapCard variant='ongoing' />
                            <span className='text-white font-bold text-2xl'>Q2 2024</span>
                        </div>
                        <div className='w-full lg:justify-end flex flex-col lg:flex-row items-center gap-8 relative z-10'>
                            <span className='text-white font-bold text-2xl'>Q3 2024</span>
                            <RoadmapCard variant='ongoing' />
                        </div>
                        <div className='w-full lg:justify-start flex flex-col-reverse lg:flex-row items-center gap-8 relative z-10'>
                            <RoadmapCard variant='ongoing' />
                            <span className='text-white font-bold text-2xl'>Q4 2024</span>
                        </div>
                        <div className='w-full lg:justify-end flex flex-col lg:flex-row items-center gap-8 relative z-10'>
                            <span className='text-white font-bold text-2xl'>Q4 2024</span>
                            <RoadmapCard variant='ongoing' />
                        </div>
                    </div>
                    <div className='absolute hidden lg:flex top-[13px]'>
                        <RoadmapLines />
                    </div>
                        <span className='bg-[#343434] lg:hidden absolute h-full w-1'/>
                </div>
            </div>
        </section>
    )
}

export default FaqSection;