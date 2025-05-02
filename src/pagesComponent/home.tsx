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
        setTimeout(() => {
            changeImg()
        }, 5000)
    }, [slide])

    return (
        <div className="w-screen h-screen bg-gray-500 flex m-auto relative">
            <div style={{ transform: `translateX(-${slide}vw)` }} className="w-[300vw] h-[100vh] inline-flex duration-1000">
                <div className='bg-[url("/homeImg1.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
                <div className='bg-[url("/homeImg2.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
                <div className='bg-[url("/homeImg3.jpg")] bg-center bg-cover w-[100vw] h-[100vh]' />
            </div>
            <div className="absolute top-1/2 -translate-y-1/3 right-20 flex flex-col gap-5 w-fit items-center opacity-90">
                <div className="h-12 w-1 bg-white" />
                <div onClick={() => setSlide(0)} className="cursor-pointer size-5 rounded-full bg-white flex">
                    <div style={{visibility: slide === 0 ? "visible" : "hidden"}} className="size-4 rounded-full bg-gray-500 m-auto" />
                </div>
                <div onClick={() => setSlide(100)} className="cursor-pointer size-5 rounded-full bg-white flex">
                    <div style={{visibility: slide === 100 ? "visible" : "hidden"}} className="size-4 rounded-full bg-gray-500 m-auto" />
                </div>
                <div onClick={() => setSlide(200)} className="cursor-pointer size-5 rounded-full bg-white flex">
                    <div style={{visibility: slide === 200 ? "visible" : "hidden"}} className="size-4 rounded-full bg-gray-500 m-auto" />
                </div>
                <div className="h-12 w-1 bg-white" />
            </div>
            <div className=" absolute bottom-0 bg-[url('/figLeftBottom.png')] bg-cover size-50" />
            <div className=" absolute top-40 right-0 bg-[url('/figRightTop.png')] bg-cover h-35 w-25" />
        </div>
    )
}