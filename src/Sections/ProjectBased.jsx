import React from 'react'

const ProjectBased = () => {
  return (
    <>
    <div className='bg-PrimaryColor pt-[50px]  pb-[80px] projectbased '>
        <div className='container mx-auto'>
        <div className='py-[30px]'>
        <h3 className='text-[38px] font-semibold text-white font-karla'>Project Based</h3>
        </div>
        <div className='grid grid-cols-2 proj-content' >
           <div className='col-span-1'>
            <h4 className='text-[30px] text-black font-karla font-semibold py-[10px]'>Adhere to your budget</h4>
            <p className='text-[18px] text-black font-karla py-[10px]'>By checking these points, you should be able to diagnose and resolve the issue with the image not showing. 
                If the issue persists, further troubleshooting may be required.
              </p>
              <p className='text-[18px] text-black font-karla py-[10px]'>By checking these points, you should be able to diagnose and resolve the issue with the image not showing. 
                If the issue persists, further troubleshooting may be required.
              </p>
              <p className='text-[18px] text-black font-karla py-[10px]'>By checking these points, you should be able to diagnose and resolve the issue with the image not showing. 
              
              </p>
              <p className='text-[18px] text-black font-karla py-[10px]'>By checking these points, you should be able to diagnose and resolve the issue with the image not showing. 
                If the issue persists, further troubleshooting may be required.
              </p>
           </div>
           <div className='col-span-1 relative'>
            <figure className='h-[500px]'>
                <img className='h-[100%]' src='./images/girlC.png'/>
            </figure>
            <div className='absolute top-[90%] right-0'>
        <div className='chatwithus'>
                <button className='flex items-center '>
                  <img src='./images/girlA.png'/>
                  <p className='uppercase'>Chat With us</p>
                </button>
              </div>
   
        </div>
           </div>
        </div>
    
       
        
        </div>
    
    </div>
    </>
  )
}

export default ProjectBased