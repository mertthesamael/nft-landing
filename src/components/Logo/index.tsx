import React, { FC } from 'react'

type LogoProps = {
  
}

const Logo: FC<LogoProps> = ({  }) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-[47px] h-[47px] bg-black rounded-[13px]' />
    </div>
  )
}

export default Logo;