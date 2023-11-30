import { Star } from '@/components/Vectors/Star';
import React, { FC } from 'react'

type RoadmapCardProps = {
  variant:'active'|'ongoing'
}

const RoadmapCard: FC<RoadmapCardProps> = ({ variant }) => {
  const renderStyle = {
    active:{
      icon:<Star />,
      bg:'bg-white'
    },
    ongoing:{
      icon:<div className='h-[43px] rounded-[9px] w-[43px] rotate-45 border-white border-4 '/>,
      bg:"bg-[#222]"
    }
  }[variant]
  return (
    <div className={`flex items-center justify-center min-w-[213px] min-h-[123px] rounded-[32px] ${renderStyle.bg}`}>
     {renderStyle.icon}
    </div>
  )
}

export default RoadmapCard;