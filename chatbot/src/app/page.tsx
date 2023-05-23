import Image from 'next/image'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Textarea } from '../../components/ui/textarea'

export default function Home() {
  return (
   <div className='flex flex-col items-center justify-center h-screen'>
    <div className='text-[#20b2aa] font-black text-[24px] -mt-40'>Unlock a World of Knowledge Ask Anything </div>
    <Image className='mt-10' src={"/chatbot.png"} height={200} width={200} alt={''}></Image>
    <div className='grid grid-cols-4 gap-4'>
    <div className='col-span-3'>
      <Input className=''/>
    </div>
    <div> <Button className='bg-[#20b2aa] hover:bg-transparent hover:text-[#20b2aa] hover:border-2 border-2 border-[#20b2aa] h-10'> Submit</Button>
    </div>
    <div className="col-span-4">
    <Textarea className=''></Textarea>
    </div>
    </div>
   
   </div>
  )
}
