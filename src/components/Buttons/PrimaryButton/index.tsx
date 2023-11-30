"use client"
import React, { FC } from 'react'

type PrimaryButtonProps = {
  type?:'button'|'submit',
  text:string
  variant:'highlight'|'ghost'
  onClick?:() => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ type,text,onClick,variant }) => {
    const classVariant = {
        highlight:'bg-[#F5E876] hover:bg-[#F5E876]/90',
        ghost:'bg-white '
    }[variant]
  return (
    <button onClick={onClick} type={type} className={`px-[24px]  transition-all rounded-[13px] lg:text-base font-bold text-black py-[13px] ${classVariant}`}>{text}</button>
  )
}

export default PrimaryButton;