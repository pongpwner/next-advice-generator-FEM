'use client'
import Image from 'next/image'
import dividerD from '../../public/images/pattern-divider-desktop.svg'
import dice from '../../public/images/icon-dice.svg'


import {useState,useEffect} from 'react'
type adviceProps={
    sAdvice:String,
    sId:Number
}
async function getAdvice(){
    let response=await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    return data
  }
export default function Advice({sAdvice,sId}:adviceProps){
    let [advice, setAdvice]= useState(sAdvice)
  let [id, setId]= useState(sId)
  async function handleClick(){
    let data= await getAdvice()
    setAdvice(data.slip.advice)
    setId(data.slip.id)
  }

  
  return (
    <>
      <div className="flex flex-col items-center border border-black rounded-md bg-slate-700 p-6 max-w-xs gap-2.5 pb-10">
        <span className='text-xs text-emerald-400 font-extrabold flex justify-center'>ADVICE # {id.toString()}</span>
        <p className='text-xl font-extrabold text-blue-100 text-center'>"{advice}" </p>
        <Image src={dividerD} alt="divider"></Image>
        

      </div>
      <button onClick={handleClick} className='p-4 bg-green-400 rounded-full relative bottom-7 active:shadow-[0px_0px_10px_5px] active:shadow-emerald-400'><Image src={dice} alt='dice'></Image></button>
      </>
    
  )
}