import React from 'react'
import styles from "../Style";
import {yourSchedule, editorialJobs, editorialSkipPaperwork, careerhub} from "../assets"

const Business = () => {
  return (
    <>
        <div className={` ${styles.flexStart} mt-12 lg:mt-24 `}>
            <div className={`${styles.boxWidth}`}>
                <div className='justify-between md:flex  '>
                    <div className='md:w-[50%]'>
                        <img src={yourSchedule} className='w-full'/>
                    </div>
                    <div className='md:w-[50%] text-justify py-12 px-[5%] md:py-[5%]  lg:py-[9%] ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
                        <h1 className='text-5xl font-bold md:leading-[60px]'>Let the jobs find you</h1>
                        <p className='text-base md:text-lg lg:text-xl max-w-[80%] ' style={{fontFamily: "Basis Grotesque Pro, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif"}}>Create your free profile to get interview invites and jobs that work for you.</p>
                        <button className='border  mt-8 text-white p-4 rounded-full w-32' style={{backgroundColor:"rgb(75 59 255 )"}}>Get Hired</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={` ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
                <div className='justify-between md:flex flex-row-reverse '>
                    <div className='md:w-[50%]'>
                        <img src={editorialJobs} className='w-full'/>
                    </div>
                    <div className='md:w-[50%] text-justify py-12 px-[5%] md:py-[5%]  lg:py-[9%] ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
                        <h1 className='text-5xl font-bold md:leading-[60px]'>Your job is personal</h1>
                        <p className='text-base md:text-lg lg:text-xl max-w-[80%] ' style={{fontFamily: "Basis Grotesque Pro, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif"}}>Tell us more about your goals and we'll match you with the right jobs to help you reach them.</p>
                        <button className='border  mt-8 text-white p-4 rounded-full w-32' style={{backgroundColor:"rgb(75 59 255 )"}}>See jobs</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={` ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
                <div className='justify-between md:flex '>
                    <div className='md:w-[50%]'>
                        <img src={editorialSkipPaperwork} className='w-full'/>
                    </div>
                    <div className='md:w-[50%] text-justify py-12 px-[5%] md:py-[5%]  lg:py-[9%] ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
                        <h1 className='text-5xl font-bold md:leading-[60px]'>Skip the paperwork</h1>
                        <p className='text-base md:text-lg lg:text-xl max-w-[80%] ' style={{fontFamily: "Basis Grotesque Pro, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif"}}>Your profile is your application. Apply to jobs instantly.</p>
                        <button className='border  mt-8 text-white p-4 rounded-full w-32' style={{backgroundColor:"rgb(75 59 255 )"}}>Create Profile</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={` ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
                <div className='justify-between md:flex flex-row-reverse '>
                    <div className='md:w-[50%]'>
                        <img src={careerhub} className='w-full'/>
                    </div>
                    <div className='md:w-[50%] text-justify py-12 px-[5%] md:py-[5%]  lg:py-[9%] ' style={{fontFamily:"snagajob nib pro, Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
                        <h1 className='text-5xl font-bold md:leading-[60px]'>Ready to level-up?</h1>
                        <p className='text-base md:text-lg lg:text-xl max-w-[80%] ' style={{fontFamily: "Basis Grotesque Pro, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif"}}>Excel with our Jobs Hub. Find tips to get ahead and make your goals a reality.</p>
                        <button className='border  mt-8 text-white p-4 rounded-full w-32' style={{backgroundColor:"rgb(75 59 255 )"}}>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Business