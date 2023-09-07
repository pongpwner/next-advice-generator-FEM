
import Advice from "./components/advice"




export default async function Home() {
  let response=await fetch('https://api.adviceslip.com/advice')
  let data = await response.json()
 


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyan-950">
      <Advice sAdvice={data.slip.advice} sId={data.slip.id}></Advice>
    </main>
  )
}
