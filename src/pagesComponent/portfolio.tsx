import { useState } from "react";
import ImageBox from "../components/imageBox";

interface ImageBoxProps {
    bgColor: string;
    scale: number;
    positionX: number;
    positionY: number;
    img: string;
    ofset: number;
    opacity: number;
    w: string;
}

export default function Portfolio() {

    const [clicked, setClicked] = useState(0)
    const [clicedAction, setClickedAction] = useState(false)
    const [slide, setSlide] = useState(0)
    // const [globalIndex, setGlobalIndex] = useState(2)
    const [hover, setHover] = useState(0)

    const imgArray = [
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 500,
            positionX: -85,
            positionY: 0,
            img: "url(/homeImg1.jpg)",
            ofset: -40,
            opacity: 1,
            w: ''
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 292,
            positionX: -50,
            positionY: 0,
            img: "url(/homeImg2.jpg)",
            ofset: 0,
            opacity: 1,
            w: ''
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 250,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg3.jpg)",
            ofset: 40,
            opacity: 1,
            w: ''
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 200,
            positionX: -18,
            positionY: 0,
            img: "url(/sword.jpg)",
            ofset: 80,
            opacity: 1,
            w: ''
        },
        {
            bgColor: "rgb(32, 32, 32)",
            scale: 350,
            positionX: -38,
            positionY: 0,
            img: "url(/homeImg2.jpg)",
            ofset: 120,
            opacity: 1,
            w: ''
        },
    ]
    // const [imgArray, setImgArray] = useState([
    //     {
    //         bgColor: "rgb(32, 32, 32)",
    //         scale: 500,
    //         positionX: -85,
    //         positionY: 0,
    //         img: "url(/homeImg1.jpg)",
    //         ofset: -40,
    //         opacity: 1,
    //         w: ''
    //     },
    //     {
    //         bgColor: "rgb(32, 32, 32)",
    //         scale: 292,
    //         positionX: -50,
    //         positionY: 0,
    //         img: "url(/homeImg2.jpg)",
    //         ofset: 0,
    //         opacity: 1,
    //         w: ''
    //     },
    //     {
    //         bgColor: "rgb(32, 32, 32)",
    //         scale: 250,
    //         positionX: -38,
    //         positionY: 0,
    //         img: "url(/homeImg3.jpg)",
    //         ofset: 40,
    //         opacity: 1,
    //         w: ''
    //     },
    //     {
    //         bgColor: "rgb(32, 32, 32)",
    //         scale: 150,
    //         positionX: -18,
    //         positionY: 0,
    //         img: "url(/sword.jpg)",
    //         ofset: 80,
    //         opacity: 1,
    //         w: ''
    //     },
    //     {
    //         bgColor: "rgb(32, 32, 32)",
    //         scale: 250,
    //         positionX: -38,
    //         positionY: 0,
    //         img: "url(/homeImg2.jpg)",
    //         ofset: 120,
    //         opacity: 1,
    //         w: ''
    //     },
    // ])

    // const sliderFun = () => {
    //     if (globalIndex === 0) {
    //         setGlobalIndex(4)
    //     } else {
    //         setGlobalIndex(globalIndex - 1)
    //     }
    //     let newArray = [...imgArray]
    //     newArray.forEach(element => {
    //         element.ofset = element.ofset + 40
    //         if (element.ofset > 120) {
    //             element.ofset = -40
    //         }
    //     });
    //     setImgArray(newArray)
    // };
    // const sliderFunUp = () => {
    //     if (globalIndex === 4) {
    //         setGlobalIndex(0)
    //     } else {
    //         setGlobalIndex(globalIndex + 1)
    //     }
    //     let newArray = [...imgArray]
    //     newArray.forEach(element => {
    //         element.ofset = element.ofset - 40
    //         if (element.ofset < -40) {
    //             element.ofset = 120
    //         }
    //     });
    //     setImgArray(newArray)
    // };

    const imagBox = () => {
        const box1 = <ImageBox
            w={clicked === 1 ? '80vw' : clicked === 0 ? '' : '0vw'}
            bgColor="rgb(32, 32, 32)"
            scale={clicked === 1 ? 100 : 500}
            positionX={clicked === 1 ? 0 : -38}
            positionY={0}
            img="url(/homeImg1.jpg)"
            ofset={0}
            opacity={hover === 1 || clicked === 1 ? 1 : 1 / 2} />
        const box2 = <ImageBox
            w={clicked === 2 ? '80vw' : clicked === 0 ? '' : '0vw'}
            bgColor="rgb(200, 6, 6)"
            scale={clicked === 2 ? 100 : 420}
            positionX={clicked === 2 ? 0 : -37}
            positionY={0}
            img="url(/homeImg2.jpg)"
            ofset={clicked === 2 ? 0 : -7}
            opacity={hover === 2 || clicked === 2 ? 1 : 1 / 2} />
        const box3 = <ImageBox
            w={clicked === 3 ? '80vw' : clicked === 0 ? '' : '0vw'}
            bgColor="rgb(32, 32, 32)"
            scale={clicked === 3 ? 100 : 420}
            positionX={clicked === 3 ? 0 : -40}
            positionY={0}
            img="url(/homeImg3.jpg)"
            ofset={clicked === 3 ? 0 : -1}
            opacity={hover === 3 || clicked === 3 ? 1 : 1 / 2} />
        const box4 = <ImageBox
            w={clicked === 4 ? '80vw' : clicked === 0 ? '' : '0vw'}
            bgColor="rgb(200, 6, 6)"
            scale={clicked === 4 ? 100 : 280}
            positionX={clicked === 4 ? 0 : -17}
            positionY={-5}
            img="url(/sword.jpg)"
            ofset={clicked === 4 ? 0 : -6}
            opacity={hover === 4 || clicked === 4 ? 1 : 1 / 2} />

        return (
            <div
                className="h-[50vw] xl:h-[68vh] hidden sm:flex sm:flex-row mt-40 mx-auto px-1">
                <div
                    className="flex duration-300 z-3 h-fit mx-1 xl:mx-5"
                    style={{
                        ...(clicked === 1 || clicked === 0 ? { opacity: 1 } : { opacity: 0, zIndex: 1, margin: 0 }),
                        ...(hover === 1 && clicked === 0 ? { scale: '102%' } : { scale: '100%' })
                    }}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => clicked > 0 ? setClicked(0) : setClicked(1)}>{box1}
                </div>
                <div
                    style={clicked === 1 ? { width: '15vw', opacity: 1 } : {}}
                    className="opacity-0 text-black text-center py-10 w-[0vw] h-[40vh] wrap-break-word z-5 duration-500">
                    <h1 className="text-4xl font-bold">HEADER</h1>
                    <p className="text-xl mt-10">
                        lkamsdlkaskdn kjasndlkjans jknasdjk asd aljsndjajs d ajksdnlkjansdk aks dkljasmdma sd,k as dajsdhajshd ,jas d,jah sdjah sdansdklj asd ajk s
                    </p>
                </div>
                <div
                    className="flex duration-300 z-3 h-fit mx-1 xl:mx-5 hover:scale-102"
                    style={{
                        ...(clicked === 2 || clicked === 0 ? { opacity: 1 } : { opacity: 0, zIndex: 1, margin: 0 }),
                        ...(hover === 2 && clicked === 0 ? { scale: '102%' } : { scale: '100%' })
                    }}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => clicked > 0 ? setClicked(0) : setClicked(2)}>{box2}
                    <div
                        style={clicked === 2 ? { width: '15vw', opacity: 1 } : {}}
                        className="opacity-0 text-black text-center py-10 w-[0vw] h-[40vh] wrap-break-word z-5 duration-500">
                        <h1 className="text-4xl font-bold">HEADER</h1>
                        <p className="text-xl mt-10">
                            lkamsdlkaskdn kjasndlkjans jknasdjk asd aljsndjajs d ajksdnlkjansdk aks dkljasmdma sd,k as dajsdhajshd ,jas d,jah sdjah sdansdklj asd ajk s
                        </p>
                    </div>
                </div>
                <div
                    className="flex duration-300 z-3 h-fit mx-1 xl:mx-5 hover:scale-102"
                    style={{
                        ...(clicked === 3 || clicked === 0 ? { opacity: 1 } : { opacity: 0, zIndex: 1, margin: 0 }),
                        ...(hover === 3 && clicked === 0 ? { scale: '102%' } : { scale: '100%' })
                    }}
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => clicked > 0 ? setClicked(0) : setClicked(3)}>{box3}
                    <div
                        style={clicked === 3 ? { width: '15vw', opacity: 1 } : {}}
                        className="opacity-0 text-black text-center py-10 w-[0vw] h-[40vh] wrap-break-word z-5 duration-500">
                        <h1 className="text-4xl font-bold">HEADER</h1>
                        <p className="text-xl mt-10">
                            lkamsdlkaskdn kjasndlkjans jknasdjk asd aljsndjajs d ajksdnlkjansdk aks dkljasmdma sd,k as dajsdhajshd ,jas d,jah sdjah sdansdklj asd ajk s
                        </p>
                    </div>
                </div>
                <div
                    className="flex duration-300 z-3 h-fit mx-1 xl:mx-5 hover:scale-102"
                    style={{
                        ...(clicked === 4 || clicked === 0 ? { opacity: 1 } : { opacity: 0, zIndex: 1, margin: 0 }),
                        ...(hover === 4 && clicked === 0 ? { scale: '102%' } : { scale: '100%' })
                    }}
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => clicked > 0 ? setClicked(0) : setClicked(4)}>{box4}
                    <div
                        style={clicked === 4 ? { width: '15vw', opacity: 1 } : {}}
                        className="opacity-0 text-black text-center py-10 w-[0vw] h-[40vh] wrap-break-word z-5 duration-500">
                        <h1 className="text-4xl font-bold">HEADER</h1>
                        <p className="text-xl mt-10">
                            lkamsdlkaskdn kjasndlkjans jknasdjk asd aljsndjajs d ajksdnlkjansdk aks dkljasmdma sd,k as dajsdhajshd ,jas d,jah sdjah sdansdklj asd ajk s
                        </p>
                    </div>
                </div>
                <div style={clicked > 0 ? { opacity: 0 } : { opacity: 1 }} className="flex h-[75vh] w-[8vw] z-1 duration-300">
                    <h1 className="fontPortfolio whitespace-nowrap size-fit -translate-x-3/10 text-start">PORTFOLIO</h1>
                </div>
                <div onClick={() => setClicked(0)} className="h-screen w-screen absolute inset-0 z-2" />
            </div>
        )
    }

    return (
        <div className="w-screen h-[100lvh] bg-white flex flex-col inset-shadow-[0_20px_30px_rgb(0,0,0,0.3)] relative pt-15 pb-2">
            <div style={{ opacity: clicedAction ? 1 : 0 }} className="z-1 bg-gray-800/50 size-full absolute inset-0 duration-300" />
            {imagBox()}
            <div className=" sm:hidden w-9/10 mx-auto mt-15 flex flex-col flex-wrap h-9/10 z-5 duration-300 relative">
                <h1 className="fontPortfolioMob text-black tracking-widest mx-auto">PORTFOLIO</h1>
                <div
                    onClick={() => setClickedAction(!clicedAction)}
                    style={{ opacity: clicedAction ? 1 : 0, zIndex: clicedAction ? 5 : 0, width: clicedAction ? '105%' : '', height: clicedAction ? '105%' : '' }}
                    className="left-1/2 top-1/2 -translate-1/2 absolute flex flex-col size-9/10 duration-300 bg-gray-300 rounded-2xl">
                    <img
                        style={{
                            backgroundImage: imgArray[clicked].img,
                            backgroundPositionX: clicked === 2 ? '-60vw' : `${imgArray[clicked].positionX + 20}vw`
                        }}
                        className="bg-cover w-full h-2/3 bg-no-repeat rounded-t-2xl"
                    />
                    <div className="p-5 bg-white h-1/3 rounded-b-2xl">
                        <h1 className="text-black text-center font-bold text-3xl">Some text</h1>
                        <p className="text-black text-center text-2xl">aaosmmdkmaskdmalk sa dlkja sdljk alsjd alksjd akjsdklas d alksjd klad  klajs  dlksm</p>
                    </div>
                </div>
                {imgArray.map((item: ImageBoxProps, index: number) => {
                    return (
                        <div
                            style={{
                                flexGrow: 1,
                                backgroundColor: item.bgColor,
                            }}
                            className=" border-3 border-white h-3/10 w-5/10 bg-gray-500 rounded-3xl text-center duration-1000 z-1">
                            <img
                                onClick={() => { setClicked(index), setClickedAction(!clicedAction) }}
                                style={{ backgroundImage: item.img, backgroundPosition: `${item.positionX}vw ${item.positionY}vh`, backgroundSize: `${item.scale}%` }}
                                alt=""
                                className="cursor-pointer duration-300 bg-no-repeat size-full rounded-3xl bg-cover" />
                        </div>
                    )
                })}
            </div>
            {/* <div className="sm:hidden flex flex-row m-auto w-[90vw] gap-4">
                <div style={{overflow: clicedAction ? '' : 'clip'}} className="h-[60vh] w-[65vw] z-5">
                    <div className="h-fit w-[65vw] relative flex flex-col -translate-y-[30vh]">
                        {imgArray.map((item: ImageBoxProps, index: number) => {
                            return (
                                <div
                                    style={{ 
                                        transform: clicedAction && clicked === index ? 'translateY(30vh)' : `translateY(${item.ofset}vh)`, 
                                        backgroundColor: item.bgColor, 
                                        opacity: item.ofset < 0 || item.ofset > 80 ? 0 : 1, 
                                        width: clicedAction && clicked === index ? '90vw' : '' ,
                                        height: clicedAction && clicked === index ? '79vh' : '' ,
                                        display: clicedAction && clicked != index ? 'none' : '' }}
                                    className=" border-3 border-white absolute sm:block h-[40vh] w-[65vw] sm:h-[68vh] sm:w-[18vw] bg-gray-500 rounded-3xl my-auto sm:my-0 sm:rounded-[4rem] text-center sm:shadow-2xl/70 duration-1000"> <p className=" absolute top-1/2 z-20 left-1/2 text-red-600 text-5xl"></p>
                                    <div onClick={() => {setClicked(index), setClickedAction(!clicedAction)}} className="absolute size-full z-5" style={{display: globalIndex === index ? '' : 'none'}} />
                                    <button style={{ zIndex: globalIndex, opacity: index === globalIndex ? 0 : 1 }} disabled={globalIndex === index ? true : false} onClick={() => sliderFunUp()} className=" duration-600 absolute w-full top-0 left-0 h-1/2 rounded-3xl bg-gradient-to-t from-black/80 bg-red-800/50 z-10" />
                                    <p style={{ zIndex: globalIndex, opacity: index === globalIndex ? 0 : 1 }} className=" absolute top-5 left-1/2 -translate-x-1/2 duration-300">/\</p>
                                    <p style={{ zIndex: globalIndex, opacity: index === globalIndex ? 0 : 1 }} className=" absolute bottom-5 left-1/2 -translate-x-1/2 duration-300">\/</p>
                                    <img
                                        style={{ backgroundImage: item.img, backgroundPosition: `${item.positionX}vw ${item.positionY}vh`, backgroundSize: `${item.scale}%` }}
                                        alt=""
                                        className="sm:opacity-50 sm:hover:opacity-100 cursor-pointer duration-300 bg-no-repeat size-full rounded-3xl sm:rounded-[4rem] bg-cover" />
                                    <button style={{ opacity: index === globalIndex ? 0 : 1 }} disabled={globalIndex === index ? true : false} onClick={() => sliderFun()} className=" duration-600 absolute w-full bottom-0 left-0 h-1/2 rounded-3xl bg-gradient-to-t from-red-800/50 bg-black/80 z-1" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="h-[75vh] w-[8vw] relativ">
                    <h1 className="portfolioSmall scale-110 text-9xl translate-y-5">PORTFOLIO</h1>
                </div>
            </div> */}
            <div className=" absolute bg-[url('/fig1.png')] bg-cover bottom-10 left-15 w-39 h-40 z-1" />
            <div className=" absolute bg-[url('/fig2.png')] bg-no-repeat bg-contain bottom-10 right-20 size-22 z-0" />
            <div className=" absolute bg-[url('/fig3.png')] bg-no-repeat bg-contain -bottom-20 size-60 z-0" />
            <div className=" absolute bg-[url('/fig4.png')] bg-no-repeat bg-contain top-5 sm:top-34 right-3/10 size-37 z-0" />
            <div className=" absolute bg-[url('/fig5.png')] bg-no-repeat bg-contain top-10 right-0 h-45 w-30 z-0" />
            {/* <div className=" hidden sm:flex flex-row m-auto gap-5 w-fit items-center opacity-90">
                <div className="h-1 w-12 bg-black" />
                <div onClick={() => setSlide(0)} className="cursor-pointer size-6 rounded-full bg-black flex">
                    <div style={{ visibility: slide === 0 ? "visible" : "hidden" }} className="size-5 rounded-full bg-gray-400 m-auto" />
                </div>
                <div onClick={() => setSlide(100)} className="cursor-pointer size-6 rounded-full bg-black flex">
                    <div style={{ visibility: slide === 100 ? "visible" : "hidden" }} className="size-5 rounded-full bg-gray-400 m-auto" />
                </div>
                <div className="h-1 w-12 bg-black" />
            </div> */}
        </div>
    )
}