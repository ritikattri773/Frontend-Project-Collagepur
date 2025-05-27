import React from 'react'

const News = () => {
  return (
       <div class='bg-gray-50  '>
            <div className=' flex justify-center items-center text-xl mt-20 mb-0 text-blue-800 font-karla tracking-widest font-bold'>Latest News</div>
            <div className='flex justify-center items-center text-6xl mt-0 text-blue-950 font-GilroyBold font-bold text-center p-5'>Read Our Latest<br />News and Blog</div>
            <div className='flex gap-7 justify-center items-center p-10'>
                
                <div class="bg-white-600  shadow-xl">
                    <img src='../assets/News_1.webp' class="tracking-widest w-lg"/>
                    <p class="p-5 text-blue-500">By admin, 05 Aug 2019</p>
                    <p class="p-5 font-bold text-lg">Monthly Web Development Update Design Ethics & Clarity Over Solution</p>
                    <p class="p-5 tracking-wider">Read More></p>
                </div>
                <div class="bg-white-600  shadow-xl">
                    <img src='../assets/News_2.webp' class="tracking-widest w-lg"/>
                    <p class="p-5 text-blue-500">By admin, 05 Aug 2019</p>
                    <p class="p-5 font-bold text-lg">Monthly Web Development Update Design Ethics & Clarity Over Solution</p>
                    <p class="p-5 tracking-wider">Read More></p>
                </div>
                <div class="bg-white-600  shadow-xl">
                    <img src='../assets/News_3.webp' class="tracking-widest w-lg"/>
                    <p class="p-5 text-blue-500">By admin, 05 Aug 2019</p>
                    <p class="p-5 font-bold text-lg">Monthly Web Development Update Design Ethics & Clarity Over Solution</p>
                    <p class="p-5 tracking-wider">Read More></p>
                </div>
                
                
            </div>
            
        </div> 
   
   
  )
}

export default News
