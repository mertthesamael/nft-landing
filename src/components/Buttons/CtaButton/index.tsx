import React, { FC } from 'react'

type CtaButtonProps = {
    type?: 'button' | 'submit',
    text: string
    variant: 'highlight' | 'ghost' | 'badge'
    onClick?: () => void

}

const CtaButton: FC<CtaButtonProps> = ({ type, text, onClick, variant }) => {
    const classVariant = {
        highlight: 'bg-[#F5E876] hover:bg-[#F5E876]/90',
        ghost: 'bg-white ',
        badge: 'relative flex justify-center bg-black hover:bg-black/80 text-white'
    }[variant]

    return (
        <button onClick={onClick} type={type} className={`px-[24px] relative w-full transition-all rounded-[13px] font-bold text-black py-[24px] ${classVariant}`}>
            {variant==='badge'&&<span className='absolute -top-4 bg-[#D9FB52] rounded-[7px] text-xs text-black p-2'>Most Popular</span>}
            {text}
        </button>
    )
}

export default CtaButton;