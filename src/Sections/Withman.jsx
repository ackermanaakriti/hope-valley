import React from 'react'

const Withman = () => {
  return (
    <>
    <div className='container mx-auto py-[80px]'>
        <div className='bg-PrimaryColor grid grid-cols-5 relative'>
         <div className='col-span-3'>
            <div className='pt-[170px] pl-[50px]'>
            <h3 className='text-[50px] text-white font-bold font-karla text-center'>With Creativity , it feels attainable.</h3>
            <div className='mt-[50px]'>
            <button className='bg-white px-[15px] py-[8px] rounded-[10px] text-[16px] font-karla text-black font-semibold'>Work With Us</button>
            </div>
            </div>
         </div>
         <div className='col-span-2 '>
            <figure  className='h-[500px] relative '>
                <img className='h-[115%] absolute bottom-0  right-[80px]' src='./images/man.png' alt=''/>
            </figure>
         </div>
        </div>
    </div>
    </>
  )
}

export default Withman