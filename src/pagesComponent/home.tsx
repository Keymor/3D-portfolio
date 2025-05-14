import { useEffect, useState } from "react"

export default function Home() {
    const [slide, setSlide] = useState(0)

    const changeImg = () => {
        if (slide === 200) {
            setSlide(0)
        } else {
            setSlide(slide + 100)
        }
    }

    useEffect(() => {
        const intervalID = setInterval(changeImg, 5000)
        return () => clearInterval(intervalID);
    }, [slide])

    return (
        <div className="w-screen h-[100svh] bg-gray-500 flex m-auto relative">
            <div style={{ transform: `translateX(-${slide}vw)` }} className="w-[300vw] h-[100vh] inline-flex duration-1000">
                <div className='bg-[url("/homeImg1.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
                <div className='bg-[url("/homeImg2.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
                <div className='bg-[url("/homeImg3.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
            </div>
            <div className="absolute bottom-20 right-1/2 translate-x-1/2 sm:top-1/2 sm:-translate-y-1/3 sm:right-20 flex flex-row sm:flex-col gap-5 w-fit items-center opacity-80 sm:opacity-90 z-1">
                <div className="h-12 w-1 bg-white hidden sm:block" />
                <div onClick={() => setSlide(0)} className="cursor-pointer h-2 w-18 rounded-xs sm:size-5 sm:rounded-full bg-white flex">
                    <div style={{visibility: slide === 0 ? "visible" : "hidden"}} className=" rounded-xs w-17 h-1.5 sm:size-4 sm:rounded-full bg-gray-500 m-auto" />
                </div>
                <div onClick={() => setSlide(100)} className="cursor-pointer h-2 w-18 rounded-xs sm:size-5 sm:rounded-full bg-white flex">
                    <div style={{visibility: slide === 100 ? "visible" : "hidden"}} className="rounded-xs w-17 h-1.5 sm:size-4 sm:rounded-full bg-gray-500 m-auto" />
                </div>
                <div onClick={() => setSlide(200)} className="cursor-pointer h-2 w-18 rounded-xs sm:size-5 sm:rounded-full bg-white flex">
                    <div style={{visibility: slide === 200 ? "visible" : "hidden"}} className="rounded-xs w-17 h-1.5 sm:size-4 sm:rounded-full bg-gray-500 m-auto" />
                </div>
                <div className="h-12 w-1 bg-white hidden sm:block" />
            </div>
            <div className=" absolute sm:bottom-0 bg-[url('/figLeftBottom.png')] -left-10 -bottom-5 -rotate-20 sm:rotate-0 sm:left-0 bg-cover size-25 sm:size-50" />
            <div className=" absolute top-40 right-0 bg-[url('/figRightTop.png')] bg-cover h-25 w-18 sm:h-35 sm:w-25" />
        </div>
    )
}