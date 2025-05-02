import ImageBox from "../components/imageBox";

export default function Portfolio() {
    return (
        <div className="w-screen h-screen bg-white flex flex-col inset-shadow-[0_20px_30px_rgb(0,0,0,0.3)] relative">
            <div className="h-25"/>
            <div className="flex flex-row gap-11 mt-30 mx-auto items-end z-2">
                <ImageBox bgColor="rgb(32, 32, 32)" scale={500} positionX={-38} positionY={0} img="url(/homeImg1.jpg)" ofset={0} />
                <ImageBox bgColor="rgb(200, 6, 6)" scale={420} positionX={-37} positionY={0} img="url(/homeImg2.jpg)" ofset={-7} />
                <ImageBox bgColor="rgb(32, 32, 32)" scale={420} positionX={-40} positionY={0} img="url(/homeImg3.jpg)" ofset={-1} />
                <ImageBox bgColor="rgb(200, 6, 6)" scale={280} positionX={-17} positionY={-5} img="url(/sword.jpg)" ofset={-6} />
                <div className="-translate-y-[7.5vh] h-[68vh] w-[8vw] rounded-[4rem] text-center relative">
                    <h1 className="rotate-90 left-13 absolute justify-center w-fit origin-bottom-left fontPortfolio leading-0 whitespace-nowrap">PORTFOLIO</h1>
                </div>
            </div>
            <div className="text-black m-auto">- o o o -</div>
            <div className=" absolute bg-[url('/fig1.png')] bg-cover bottom-10 left-15 w-39 h-40 z-1"/>
            <div className=" absolute bg-[url('/fig2.png')] bg-no-repeat bg-contain bottom-10 right-20 size-22 z-0"/>
            <div className=" absolute bg-[url('/fig3.png')] bg-no-repeat bg-contain -bottom-20 size-60 z-0"/>
            <div className=" absolute bg-[url('/fig4.png')] bg-no-repeat bg-contain top-34 right-3/10 size-37 z-0"/>
            <div className=" absolute bg-[url('/fig5.png')] bg-no-repeat bg-contain top-10 right-0 h-45 w-30 z-0"/>
        </div>
    )
}