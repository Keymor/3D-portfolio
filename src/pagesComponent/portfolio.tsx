import { useState } from "react";
import ImageBox from "../components/imageBox";

export default function Portfolio() {

    const [slide, setSlide] = useState(0)

    return (
        <div className="w-screen h-screen bg-white flex flex-col inset-shadow-[0_20px_30px_rgb(0,0,0,0.3)] relative pt-15 pb-2">
            <div className="flex flex-row gap-11 mt-30 mx-auto items-end z-2">
                <ImageBox bgColor="rgb(32, 32, 32)" scale={500} positionX={-38} positionY={0} img="url(/homeImg1.jpg)" ofset={0} />
                <ImageBox bgColor="rgb(200, 6, 6)" scale={420} positionX={-37} positionY={0} img="url(/homeImg2.jpg)" ofset={-7} />
                <ImageBox bgColor="rgb(32, 32, 32)" scale={420} positionX={-40} positionY={0} img="url(/homeImg3.jpg)" ofset={-1} />
                <ImageBox bgColor="rgb(200, 6, 6)" scale={280} positionX={-17} positionY={-5} img="url(/sword.jpg)" ofset={-6} />
                <div className="h-[75vh] w-[8vw] relativ">
                    <h1 className="fontPortfolio whitespace-nowrap size-fit -translate-x-3/10 text-start">PORTFOLIO</h1>
                </div>
            </div>
            <div className=" absolute bg-[url('/fig1.png')] bg-cover bottom-10 left-15 w-39 h-40 z-1" />
            <div className=" absolute bg-[url('/fig2.png')] bg-no-repeat bg-contain bottom-10 right-20 size-22 z-0" />
            <div className=" absolute bg-[url('/fig3.png')] bg-no-repeat bg-contain -bottom-20 size-60 z-0" />
            <div className=" absolute bg-[url('/fig4.png')] bg-no-repeat bg-contain top-34 right-3/10 size-37 z-0" />
            <div className=" absolute bg-[url('/fig5.png')] bg-no-repeat bg-contain top-10 right-0 h-45 w-30 z-0" />
            <div className=" m-auto flex flex-row gap-5 w-fit items-center opacity-90">
                <div className="h-1 w-12 bg-black" />
                <div onClick={() => setSlide(0)} className="cursor-pointer size-6 rounded-full bg-black flex">
                    <div style={{ visibility: slide === 0 ? "visible" : "hidden" }} className="size-5 rounded-full bg-gray-400 m-auto" />
                </div>
                <div onClick={() => setSlide(100)} className="cursor-pointer size-6 rounded-full bg-black flex">
                    <div style={{ visibility: slide === 100 ? "visible" : "hidden" }} className="size-5 rounded-full bg-gray-400 m-auto" />
                </div>
                <div className="h-1 w-12 bg-black" />
            </div>
        </div>
    )
}