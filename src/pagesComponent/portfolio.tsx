import { use, useState } from "react";
import ImageBox from "../components/imageBox";

interface ImageBoxProps {
    bgColor: string;
    scale: number;
    positionX: number;
    positionY: number;
    img: string;
    ofset: number;
    opacity: number
}

export default function Portfolio() {

    const [clicked, setClicked] = useState(0)
    const [slide, setSlide] = useState(0)
    const [globalIndex, setGlobalIndex] = useState(2)                             
    const [imgArray, setImgArray] = useState([
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 250,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg1.jpg)",
            ofset: -40,
            opacity: 1
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 250,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg2.jpg)",
            ofset: 0,
            opacity: 1
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 250,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg3.jpg)",
            ofset: 40,
            opacity: 1
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 150,
            positionX: -18,
            positionY: 0,
            img: "url(/sword.jpg)",
            ofset: 80,
            opacity: 1
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 250,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg2.jpg)",
            ofset: 120,
            opacity: 1
        },
    ])

    const sliderFun = () => {
        if (globalIndex === 0) {
            setGlobalIndex(4)
        } else {
            setGlobalIndex(globalIndex - 1)
        }
        let newArray = [...imgArray]
        newArray.forEach(element => {
            element.ofset = element.ofset + 40
            if (element.ofset > 120) {
                element.ofset = -40
                element.opacity = 0
                setTimeout(() => {
                    element.opacity = 1
                }, 500)
            }
        });
        setImgArray(newArray)
    };
    const sliderFunUp = () => {
        if (globalIndex === 4) {
            setGlobalIndex(0)
        } else {
            setGlobalIndex(globalIndex + 1)
        }
        let newArray = [...imgArray]
        newArray.forEach(element => {
            element.ofset = element.ofset - 40
            if (element.ofset < -40) {
                element.ofset = 120
                element.opacity = 0
                setTimeout(() => {
                    element.opacity = 1
                }, 500)
            }
        });
        setImgArray(newArray)
    };

    const imagBox = () => {
        const box1 = <ImageBox bgColor="rgb(32, 32, 32)" scale={500} positionX={-38} positionY={0} img="url(/homeImg1.jpg)" ofset={0} />
        const box2 = <ImageBox bgColor="rgb(200, 6, 6)" scale={420} positionX={-37} positionY={0} img="url(/homeImg2.jpg)" ofset={-7} />
        const box3 = <ImageBox bgColor="rgb(32, 32, 32)" scale={420} positionX={-40} positionY={0} img="url(/homeImg3.jpg)" ofset={-1} />
        const box4 = <ImageBox bgColor="rgb(200, 6, 6)" scale={280} positionX={-17} positionY={-5} img="url(/sword.jpg)" ofset={-6} />

        return (
            <div className="hidden sm:flex flex-row gap-11 mt-30 mx-auto items-end z-2">
                <div
                    className=" duration-300"
                    style={clicked === 1 || clicked === 0 ? { opacity: 1 } : { opacity: 0 }}
                    onClick={() => setClicked(1)}>{box1}</div>
                <div
                    className=" duration-300"
                    style={clicked === 2 || clicked === 0 ? { opacity: 1 } : { opacity: 0 }}
                    onClick={() => setClicked(2)}>{box2}</div>
                <div
                    className=" duration-300"
                    style={clicked === 3 || clicked === 0 ? { opacity: 1 } : { opacity: 0 }}
                    onClick={() => setClicked(3)}>{box3}</div>
                <div
                    className=" duration-300"
                    style={clicked === 4 || clicked === 0 ? { opacity: 1 } : { opacity: 0 }}
                    onClick={() => setClicked(4)}>{box4}</div>
                {/* <div onClick={() => setClicked(0)} className="bg-amber-300 absolute -translate-x-[6vw] translate-y-[11.5vh] w-screen h-screen -z-1" /> */}
                <div className="h-[75vh] w-[8vw] relativ">
                    <h1 className="fontPortfolio whitespace-nowrap size-fit -translate-x-3/10 text-start">PORTFOLIO</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col inset-shadow-[0_20px_30px_rgb(0,0,0,0.3)] relative pt-25 sm:pt-15 pb-2">
            {imagBox()}
            <div className="sm:hidden flex flex-row m-auto w-[90vw] gap-4">
                <div className="h-[60vh] w-[65vw] overflow-clip z-5">
                    <div className="h-fit w-[65vw] relative flex flex-col -translate-y-[30vh]">
                        {imgArray.map((item: ImageBoxProps, index: number) => {
                            return (
                                <div
                                    style={{ transform: `translateY(${item.ofset}vh)`, backgroundColor: item.bgColor, display: item.opacity === 1 ? 'block' : 'none' }}
                                    className=" border-3 border-white absolute sm:block h-[40vh] w-[65vw] sm:h-[68vh] sm:w-[18vw] bg-gray-500 rounded-3xl my-auto sm:my-0 sm:rounded-[4rem] text-center sm:shadow-2xl/70 hover:scale-102 duration-1000">
                                    <button style={{zIndex:globalIndex, opacity: index === globalIndex ? 0 : 1}} disabled={globalIndex === index? true : false} onClick={() => sliderFunUp()} className=" duration-600 absolute w-full top-0 left-0 h-1/2 rounded-3xl bg-gradient-to-t from-black/80 bg-red-800/50 z-10" />
                                    <img
                                        style={{ backgroundImage: item.img, backgroundPosition: `${item.positionX}vw ${item.positionY}vh`, backgroundSize: `${item.scale}%` }}
                                        alt=""
                                        className="sm:opacity-50 sm:hover:opacity-100 cursor-pointer duration-300 bg-no-repeat size-full rounded-3xl sm:rounded-[4rem] bg-cover" />
                                    <button style={{opacity: index === globalIndex ? 0 : 1}} disabled={globalIndex === index? true : false} onClick={() => sliderFun()} className=" duration-600 absolute w-full bottom-0 left-0 h-1/2 rounded-3xl bg-gradient-to-t from-red-800/50 bg-black/80 z-1" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="h-[75vh] w-[8vw] relativ">
                    <h1 className="portfolioSmall scale-110 text-9xl translate-y-5">PORTFOLIO</h1>
                </div>
            </div>
            <div className=" absolute bg-[url('/fig1.png')] bg-cover bottom-10 left-15 w-39 h-40 z-1" />
            <div className=" absolute bg-[url('/fig2.png')] bg-no-repeat bg-contain bottom-10 right-20 size-22 z-0" />
            <div className=" absolute bg-[url('/fig3.png')] bg-no-repeat bg-contain -bottom-20 size-60 z-0" />
            <div className=" absolute bg-[url('/fig4.png')] bg-no-repeat bg-contain top-10 sm:top-34 right-3/10 size-37 z-0" />
            <div className=" absolute bg-[url('/fig5.png')] bg-no-repeat bg-contain top-10 right-0 h-45 w-30 z-0" />
            <div className=" hidden m-auto sm:flex flex-row gap-5 w-fit items-center opacity-90">
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