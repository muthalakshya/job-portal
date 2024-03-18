import React from 'react'
import {designer, location, search,Dport} from '../assets'
import styles from "../Style";

const Hero = () => {
  return (
    <>
    <div className='max-[820px]:hidden'>
        <div className='w-full' style={{ backgroundImage: `url(${designer})`,backgroundPosition: "center", height:'776px',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className={` ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1 className=' mx-4 my-2 text-white text-7xl text-center pt-72 font-bold align-text-bottom ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>Find work you'll love, fast.</h1>
                    <form className={`  flex px-4 py-4`}>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block flex-1 rounded-l-full border-0 py-5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Job title, company or industry"
                        />

                        <img src={location} className='h-16 w-16 bg-white p-4 '/>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block flex flex-1  border-0 py-5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder={"Location or pincode"}
                        />
                        <select
                            id="km"
                            name="km"
                            className="h-18  border-0 bg-white py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                            <option>5 miles</option>
                            <option>10 miles</option>
                            <option>20 miles</option>
                            <option>50 miles</option>
                        </select>
                        <div className='h-16 w-28 bg-white p-2 rounded-r-full'>
                            <img src={search} className='h-12 w-24  bg-indigo-500  rounded-full'/>
                        </div>
                    </form>
                </div>
            </div>
            <div class={` text-white relative h-64 w-full bg-gradient-to-r from-pink-800 to-transparent mt-20  ${styles.flexStart} sm:h-56`}>
                <div class={`${styles.boxWidth} mt-20 mr-0 flex justify-between xs:px-12`}>
                    <div className=''>
                        <h2 className='text-4xl leading-relaxed '>Experience the new way to work</h2>
                        <h3 className='text-2xl '>See jobs we've picked just for you</h3>
                    </div>
                    <div class={`text-3xl `}>
                        <button className='border p-4 rounded-full'>Get started</button>
                    </div>
                </div>
                
            </div>
        </div>
        {/* <div className='mt-64'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis facilis repellat, rem error quam odit assumenda inventore ratione eos doloribus cupiditate sequi mollitia quo praesentium blanditiis, beatae vero. Enim, voluptate.</div> */}
    </div>
    <div className='min-[821px]:hidden'>
            <form className={`  flex m-4`}>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block flex-1 rounded-l-full border-0 py-5 pl-6 pr-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Job title, company or industry"
                />

                
                <div className='h-16 w-28 bg-white p-2 rounded-r-full border-2'>
                    <img src={search} className='h-12 w-24  bg-indigo-500  rounded-full '/>
                </div>
            </form>
            <div className='w-full h-[714px]' style={{ backgroundImage: `url(${Dport})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center"}}>
                <h1 className=' mx-4  text-white text-5xl text-center pt-72 font-bold align-text-bottom ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>Find work you'll love, fast.</h1>
                <div class={`px-2 text-white relative  w-full bg-gradient-to-r from-pink-800 to-transparent mt-20 sm:h-[296px] `}>
                    <div class={`${styles.boxWidth} mt-20 mr-0 xs:px-12 text-center`}>
                        <div className=''>
                            <h2 className='text-4xl  leading-relaxed '>Experience the new way to work</h2>
                            <h3 className='text-xl '>See jobs we've picked just for you</h3>
                        </div>
                        <div class={` mt-2 py-5`}>
                            <button className='border  p-4 rounded-full'>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quo, ipsum exercitationem rem soluta dolore aliquid. Ducimus facere unde dolorem, explicabo nemo dolores maiores, atque aut esse quasi sapiente.</div> */}
    </div>
    </>
  )
}

export default Hero