import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
    return (
        <div class="bg-blue-950 text-white">
            <div class="flex  ">
                <div class="p-5">
                    <img src="https://html.webtend.net/omnivus/assets/img/logo-1.1.png" alt="This is Logo" class=" m-10" />
                    <p class=" m-10 font-karla">The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bringto our community onferences, books, and our membership added to the online magazine.</p>
                    <p class="m-10 font-karla">One thing that hasn’t changed is that we’re a small team — with most of us not working</p>
                </div>
                <div class="p-5 m-10">
                    <h1 class="font-bold text-3xl mb-10 font-GilroyBold">Pages</h1>
                    <span class="flex gap-10">
                    <ul class="">
                        <li class="p-3 font-karla cursor-pointer">Home</li>
                        <li class="p-3 font-karla cursor-pointer">Services</li>
                        <li class="p-3 font-karla cursor-pointer">About</li>
                        <li class="p-3 font-karla cursor-pointer">Career</li>
                        <li class="p-3 font-karla cursor-pointer">Refund</li>
                        <li class="p-3 font-karla cursor-pointer">Terms</li>
                    </ul>
                    <ul class="">
                        <li class="p-3 font-karla cursor-pointer">Detail</li>
                        <li class="p-3 font-karla cursor-pointer">Contact</li>
                        <li class="p-3 font-karla cursor-pointer">Business</li>
                        <li class="p-3 font-karla cursor-pointer">Career</li>
                    </ul>
                    </span>
                </div>
                <div class="p-5 m-10">
                    <h1 class="font-bold text-3xl mb-10 font-GilroyBold">Working Hours</h1>
                    <ul class="">
                            <li class=" font-karla cursor-pointer p-3">Monday - Friday: 7:00 - 17:00</li>
                            <li class=" font-karla cursor-pointer p-3">Saturday: 7:00 - 12:00</li>
                            <li class=" font-karla cursor-pointer p-3">Sunday and holidays: 8:00 - 10:00</li>
                    </ul>
                    <p class="p-3"><span class="font-bold">For more then 30 years,</span>IT Service has been a reliable partner in the field of logistics and cargo forwarding.</p>
                </div>
            </div>
            <div class="flex justify-center items-center flex-col p-5 gap-7.5">
                <div class='bg-blue-400 h-0.25 w-350 '></div>
                <p>Copyright By@ <a href="#">WebTend</a> - 2021</p>
            </div>
        </div>
    )
}

export default Footer
