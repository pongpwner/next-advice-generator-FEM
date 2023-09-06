'use client'
import Image from 'next/image'
import dividerD from '../public/images/pattern-divider-desktop.svg'
import dice from '../public/images/icon-dice.svg'
import { useEffect, useState } from 'react'


async function getAdvice(){
  let response=await fetch('https://api.adviceslip.com/advice')
  let data = await response.json()
  return data
}

// export const getStaticProps=async()=>{
//   let response=await fetch('https://api.adviceslip.com/advice')
//   let data = await response.json()
//   return {
//     props:{id:data.slip.id, advice:data.slip.advice}
//   }


//}
// type homeProps={
//   did:Number,
//   dadvice:String
// }
export default function Home() {

  
  let [advice, setAdvice]= useState("")
  let [id, setId]= useState<Number>(0)
  async function handleClick(){
    let data= await getAdvice()
    setAdvice(data.slip.advice)
    setId(data.slip.id)
  }
  useEffect(()=>{
    async function getData(){
      let data=await getAdvice()
      setAdvice(data.slip.advice)
      setId(data.slip.id)

    }
    getData()

  }
    ,[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyan-950">
      <div className="flex flex-col items-center border border-black rounded-md bg-slate-700 p-6 max-w-xs gap-2.5 pb-10">
        <span className='text-xs text-emerald-400 font-extrabold flex justify-center'>ADVICE # {id.toString()}</span>
        <p className='text-xl font-extrabold text-blue-100 text-center'>"{advice}" </p>
        <Image src={dividerD} alt="divider"></Image>
        

      </div>
      <button onClick={handleClick} className='p-4 bg-green-400 rounded-full relative bottom-7'><Image src={dice} alt='dice'></Image></button>
    </main>
  )
}
