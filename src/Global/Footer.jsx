import React from 'react'
import { footerdata } from './Data/footer'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer py-[30px]'>
    <div className='container mx-auto py-[50px] '>
        <div className='grid grid-cols-5'>
            {
                footerdata.map((item,index)=>
                (
                    <div className='col-span-1'>
                    <h4 className='text-[20px] font-semibold font-karla text-black mb-[20px]'>{item.title}</h4>
                    <ul>
                        {
                            item.list.map((lists,index)=>(
                                <li className='py-[5px] font-karla text-[18px] text-gray-500'>
                                   {lists.name}
                                </li>
                            ))
                        }
                      
                    </ul>
                </div>

                ))
            }
           
        </div>
       
    </div>
    <div className='py-[10px] footer-b '>
        <div className='container mx-auto flex justify-between '>

       
            <div>
                <h3 className='text-[25px] text-black font-karla'>@Hope Valley 2024</h3>
            </div>
            <div className='flex gap-[30px]'>
                <span className='text-grayy text-[30px] '>
                    <FaFacebook/>
                </span>
                <span className='text-grayy text-[30px] '>
                    <FaInstagram/>
                </span>
                <span className='text-grayy text-[30px] '>
                    <FaLinkedin/>
                </span>
                <span className='text-grayy text-[30px] '>
                    <FaTwitter/>
                </span>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer