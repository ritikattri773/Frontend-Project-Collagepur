import React from 'react'

import { FaLaptopCode } from 'react-icons/fa'

const teamMembers = () => {
    return (
        <div class='bg-gray-50 '>
            <div className=' flex justify-center items-center text-xl mt-20 mb-0 text-blue-800 font-karla tracking-widest font-bold'>OUR TEAM MEMBERS</div>
            <div className='flex justify-center items-center text-6xl mt-0 text-blue-950 font-GilroyBold font-bold text-center'>Meet Our Exclusive <br /> Leadership</div>

            <div class="flex   gap-20 overflow-x-scroll  p-10 ">

                <div class=" shadow-l rounded-lg bg-blue-50 " >
                    <span class="">
                        <img src="../assets/team-1.webp" height={288} width={320} class='rounded-lg' />
                        <h1 class="font-bold text-center text-xl">Harry Garret</h1>
                        <p class="text-center text-s">Design Expert</p>

                    </span>

                </div>
                <div class=" shadow-l rounded-lg bg-blue-50 " >
                    <span class="">
                        <img src="../assets/team-02.webp" height={288} width={320} class='rounded-lg' />
                        <h1 class="font-bold text-center text-xl">Harry Garret</h1>
                        <p class="text-center text-s">Design Expert</p>

                    </span>

                </div>
                <div class=" shadow-l rounded-lg bg-blue-50 " >
                    <span class="">
                        <img src="../assets/team-1.webp" height={288} width={320} class='rounded-lg' />
                        <h1 class="font-bold text-center text-xl">Harry Garret</h1>
                        <p class="text-center text-s">Design Expert</p>

                    </span>

                </div>
                <div class=" shadow-l rounded-lg bg-blue-50 " >
                    <span class="">
                        <img src="../assets/team-03.webp" height={288} width={320} class='rounded-lg' />
                        <h1 class="font-bold text-center text-xl">Harry Garret</h1>
                        <p class="text-center text-s">Design Expert</p>

                    </span>

                </div>
                <div class=" shadow-l rounded-lg bg-blue-50 " >
                    <span class="">
                        <img src="../assets/team-02.webp" height={288} width={320} class='rounded-lg' />
                        <h1 class="font-bold text-center text-xl">Harry Garret</h1>
                        <p class="text-center text-s">Design Expert</p>

                    </span>

                </div>
                
                
            </div>
        </div>
    )
}

export default teamMembers
