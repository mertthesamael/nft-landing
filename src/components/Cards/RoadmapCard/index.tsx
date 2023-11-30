import { Star } from '@/components/Vectors/Star';
import React, { FC } from 'react'

type RoadmapCardProps = {
  
}

const RoadmapCard: FC<RoadmapCardProps> = ({  }) => {
  return (
    <div className='flex items-center justify-center min-w-[213px] min-h-[123px] bg-white rounded-[32px]'>
     <Star />
    </div>
  )
}

export default RoadmapCard;