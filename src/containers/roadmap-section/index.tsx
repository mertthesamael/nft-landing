import RoadmapCard from '@/components/Cards/RoadmapCard';
import { RoadmapLines } from '@/components/Vectors/RoadmapLines';
import React, { FC } from 'react'

type FaqSectionProps = {

}

const FaqSection: FC<FaqSectionProps> = ({ }) => {
    return (
        <section className='w-full flex justify-center page-format  py-32 h-screen'>
            <div className='flex flex-col width-cap  relative w-full h-full'>
                <div className='w-full flex px-[21rem]  justify-center h-full relative'>
                    <div className='w-[951px] min-w-[951px] h-full flex flex-col gap-[38px]'>
                        <div className='w-full flex justify-start relative z-10'>
                            <RoadmapCard />
                        </div>
                        <div className='w-full flex justify-end relative z-10'>
                            <RoadmapCard />
                        </div>
                        <div className='w-full flex justify-start relative z-10'>
                            <RoadmapCard />
                        </div>
                        <div className='w-full flex justify-end relative z-10'>
                            <RoadmapCard />
                        </div>
                        <div className='w-full flex justify-start relative z-10'>
                            <RoadmapCard />
                        </div>
                    </div>
                    <div className='absolute top-[13px]'>
                        <RoadmapLines />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection;