import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
const CaseStudies = () => {
    return (
        <div>
            <div class="bg-blue-500 flex gap-200 justify-center items-center">
                <div class="text-white p-20">
                    <p class="tracking-widest text-2xl mb-4">Latest Case Studies</p>
                    <p class="text-5xl font-bold ">Read Our Latest <br />Case Study</p>
                </div>
                <div className='flex gap-10'>
                    <div class="rounded-full bg-white h-15 w-15 flex justify-center items-center text-blue-600 " >
                        <IoIosArrowRoundBack class="h-7.5 w-7.5" />
                    </div>
                    <div class="rounded-full bg-white h-15 w-15 flex justify-center items-center text-blue-600" >
                        <IoIosArrowRoundForward class="h-7.5 w-7.5" />
                    </div>
                </div>
            </div>
            <hr class="text-blue-950"/>
            <div class="flex bg-blue-500 p-10">
                <div class="flex justify-center items-center gap-29 m-10">
                    <img src='../assets/Csae_1.webp' />
                    <img src='../assets/case_2.webp' />
                    <img src='../assets/Case-3.webp' />
                    
                </div>
            </div>
            <div class="bg-blue-950">
                <div class="flex justify-center items-center gap-10 p-10"> 
                    <div class="border-5 border-blue-400 rounder-full text-white p-20  flex justify-center items-center flex-col">
                        <div class="bg-green-500 rounded-full">
                            
                        <AiOutlineMessage class="h-20 w-20 p-5"/>
                        </div>
                        <p class="text-5xl font-bold m-5">280</p>
                        <p class="text-lg font-bold">Our Branches</p>
                    </div>
                    <div class="border-5 border-blue-400 rounder-full text-white p-20 flex justify-center items-center flex-col mt-40">
                        <div class="bg-yellow-500 rounded-full ">
                            
                        <AiOutlineMessage class="h-20 w-20 p-5"/>
                        </div>
                        <p class="text-5xl font-bold m-5">280</p>
                        <p class="text-lg font-bold">Our Branches</p>
                    </div>
                    <div class="border-5 border-blue-400 rounder-full text-white p-20 flex justify-center items-center flex-col">
                        <div class="bg-red-500 rounded-full ">
                            
                        <AiOutlineMessage class="h-20 w-20 p-5"/>
                        </div>
                        <p class="text-5xl font-bold m-5">280</p>
                        <p class="text-lg font-bold">Our Branches</p>
                    </div>
                    <div class="border-5 border-blue-400 rounder-full text-white p-20 flex justify-center items-center flex-col mt-40">
                        <div class="bg-blue-500 rounded-full ">
                            
                        <AiOutlineMessage class="h-20 w-20 p-5"/>
                        </div>
                        <p class="text-5xl font-bold m-5">280</p>
                        <p class="text-lg font-bold">Our Branches</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaseStudies
