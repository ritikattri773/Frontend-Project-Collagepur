
import React from 'react'

const header = () => {
  return (
  <div class="flex justify-between items-center  ml-3.5 mb-3.5 mr-5 p-5">
    <img src="assets/logo.webp" alt='logo' />

    <ul class="flex items-center gap-8 justify-center text-l ml-10 ">
      <li class="hover:text-blue-600 cursor-pointer">Home</li>
      <li class="hover:text-blue-600 cursor-pointer">About</li>
      <li class="hover:text-blue-600 cursor-pointer">Services</li>
      <li class="hover:text-blue-600 cursor-pointer">Pages</li>
      <li class="hover:text-blue-600 cursor-pointer">Blogs</li>
      <li class="hover:text-blue-600 cursor-pointer">Contact</li>
      <div class="flex items-center justify-center gap-4 ml-10">
        <li class="hover:text-blue-600 cursor-pointer" >🛒</li>
        <li class="hover:text-blue-600 cursor-pointer">🔍</li>
        <li class="hover:text-blue-600 cursor-pointer">☰</li>
        <li><button class="bg-blue-600 p-3.5 rounded-lg text-white border-2 border-blue-2 hover:bg-white hover:text-blue-600 cursor-pointer">Free consulting →</button></li>
      </div>
    </ul>
  </div>

  )
}

export default header
