import React from 'react'
import styles from "../Style";
import {company, location, Popular_Categories, Treading} from "../constants"

const AddressLink = () => {
  return (
    <>
        <div className={` ${styles.flexStart} mt-12 lg:mt-24 `}>
            <div className={`${styles.boxWidth} sm:flex flex-wrap justify-between px-10 border-b-[5px] `}>
                <div className='my-10 border-t-4 border-violet-400 py-10 sm:border-none'>
                    <h1 className='text-xl font-bold mb-5'>Popular Categories</h1>
                    {Popular_Categories?.map((item)=>
                        <a className='flex leading-[60px] hover:text-secondary'>{item.val}</a>
                    )}
                    <a  className='text-blue-900 font-bold'>View more</a>
                </div>
                <div className='my-10 border-t-4 border-violet-400 py-10 sm:border-none'>
                    <h1 className='text-xl font-bold mb-5'>Trending Job Searches</h1>
                    {Treading?.map((item)=>
                        <a className='flex leading-[60px] hover:text-secondary'>{item.val}</a>
                    )}
                    <a  className='text-blue-900 font-bold'>View more</a>
                </div>
                <div className='my-10 border-t-4 border-violet-400 py-10 sm:border-none'>
                    <h1 className='text-xl font-bold mb-5'>Top Cities</h1>
                    {location?.map((item)=>
                        <a className='flex leading-[60px] hover:text-secondary'>{item.val}</a>
                    )}
                    <a  className='text-blue-900 font-bold'>View more</a>
                </div>
                <div className='my-10 border-t-4 border-violet-400 py-10 sm:border-none'>
                    <h1 className='text-xl font-bold mb-5'>Top Companies</h1>
                    {company?.map((item)=>
                        <a className='flex leading-[60px] hover:text-secondary'>{item.val}</a>
                    )}
                    <a  className='text-blue-900 font-bold'>View more</a>
                </div>
            </div>
        </div>
        <div className={` ${styles.flexStart} mt-12   mb-8`}>
            <div className={`${styles.boxWidth} text-center px-10 `}>
                <h1 className='text-2xl lg:text-4xl font-bold justify-center pb-12 lg:pb-16' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>Still haven't found what you're looking for?</h1>
                <border className="text-white p-4 rounded-[36px] px-8" style={{backgroundColor:"rgb(75 59 255 )"}}>Browse jobs</border>
            </div>
        </div>
    </>
  )
}

export default AddressLink