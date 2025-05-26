import React from 'react'
import { LuLaptopMinimal } from "react-icons/lu";
import { FaFingerprint } from "react-icons/fa"; 
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FiDatabase } from "react-icons/fi";
const servicePage1 = () => {
    return (
        <div class='bg-gray-50 p-10 mb-0'>
            <div className=' flex justify-center items-center text-xl mt-20 mb-0 text-blue-800 font-karla tracking-widest font-bold'>SERVICES</div>
            <div className='flex justify-center items-center text-7xl mt-0 text-blue-950 font-GilroyBold font-bold '>What We Do</div>

            <div class="grid grid-cols-4 gap-3  m-10">

                <div class=" shadow-lg hover:bg-blue-500 rounded-2xl hover:text-white m-3 p-10 bg-white">
                    <span class="flex justify-center items-center mt-10 flex-col">
                        <LuLaptopMinimal size={100} class=" rounded-full bg-green-100 p-4 text-green-700" />
                        <h1 class="font-GilroyBold font-bold text-2xl p-2.5">IT Soluations</h1>
                        <p class="p-2.5 text-center font-karla">Sed ut perspiciatis unde omnis iste natus error volup</p>

                    </span>

                </div>
                <div class=" shadow-lg hover:bg-blue-500 rounded-2xl hover:text-white m-3 p-10 bg-white">
                    <span class="flex justify-center items-center mt-10 flex-col">
                        <FaFingerprint size={100} class=" rounded-full bg-blue-100 p-4 text-blue-700" />
                        <h1 class="font-GilroyBold font-bold text-2xl p-2.5">Security Systems</h1>
                        <p class="p-2.5 text-center font-karla">Sed ut perspiciatis unde omnis iste natus error volup</p>

                    </span>

                </div>
                <div class=" shadow-lg hover:bg-blue-500 rounded-2xl hover:text-white m-3 p-10 bg-white">
                    <span class="flex justify-center items-center mt-10 flex-col">
                        <HiOutlineComputerDesktop size={100} class=" rounded-full bg-yellow-100 p-4 text-yellow-700" />
                        <h1 class="font-GilroyBold font-bold text-2xl p-2.5">Web Devlopment</h1>
                        <p class="p-2.5 text-center font-karla">Sed ut perspiciatis unde omnis iste natus error volup</p>

                    </span>

                </div>
                <div class=" shadow-lg hover:bg-blue-500 rounded-2xl hover:text-white m-3 p-10 bg-white">
                    <span class="flex justify-center items-center mt-10 flex-col">
                        <FiDatabase size={100} class=" rounded-full bg-red-100 p-4 text-red-700" />
                        <h1 class="font-GilroyBold font-bold text-2xl p-2.5">Database</h1>
                        <p class="p-2.5 text-center font-karla">Sed ut perspiciatis unde omnis iste natus error volup</p>

                    </span>

                </div>

            </div>


        </div>
    )
}

export default servicePage1
