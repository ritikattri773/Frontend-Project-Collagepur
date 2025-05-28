import React from 'react'

const Herobanner = () => {
    return (
        // <div class="bg-[url('../assets/bg.jpg')] bg-cover bg-center pt-40 pb-2 p-10">
        <div class="bg-blue-100 bg-cover bg-center pt-30 pb-2 p-10">
            <div class="flex justify-between">
                <div class="mt-35">
                    <div class="mb-5 text-3xl text-blue-950 tracking-widest font-bold">IT Business Consulting</div>

                    <b><h1 class="text-6xl text-blue-950 tracking-widest font-bold">Best IT Soluations<br />Provide Agency</h1>
                    </b>
                    <p class="mt-5 text-blue-900 tracking-widest font-bold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda<br />tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis</p>
                    <button class="bg-blue-600 text-white p-5 rounded-2xl mt-5 hover:bg-blue-900 tracking-widest font-bold">Our Services</button>
                </div>
                <img alt="this is a image "
                    class="md:mask-none" src="../assets/heroImage.webp" />
            </div>
        </div>

    )
}

export default Herobanner
