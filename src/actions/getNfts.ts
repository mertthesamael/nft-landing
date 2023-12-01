"use server"

import { TNft } from "@/types/TNft"


const NFTs : TNft[] = [
    {
        id:1,
        name:'Background 1',
        category:'background',
        rarity:0.52,
        img:'/nftBg.webp'
    },
    {
        id:2,
        name:'Background 2',
        category:'background',
        rarity:1,
        img:'/bg1.webp'
    },
    {
        id:3,
        name:'Background 3',
        category:'background',
        rarity:0.25,
        img:'/bg2.webp'
    },
    {
        id:4,
        name:'Background 4',
        category:'background',
        rarity:1-0.38,
        img:'/bg3.webp'
    },
    {
        id:5,
        name:'Background 5',
        category:'background',
        rarity:0.43,
        img:'/bg4.webp'
    },
    {
        id:6,
        name:'Background 6',
        category:'background',
        rarity:0.72,
        img:'/bg5.webp'
    },
    {
        id:7,
        name:'Background 7',
        category:'background',
        rarity:0.85,
        img:'/bg6.webp'
    },
    {
        id:8,
        name:'Background 8',
        category:'background',
        rarity:0.1,
        img:'/bg7.webp'
    },
    {
        id:9,
        name:'Background 9',
        category:'background',
        rarity:0.05,
        img:'/bg8.webp'
    },
    {
        id:10,
        name:'Background',
        category:'background',
        rarity:0.28,
        img:'/bg9.webp'
    },
]

export const getNfts = async () => {

    return NFTs

}