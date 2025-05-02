import ImageBox from "../components/imageBox";

export default function Portfolio() {
    return (
        <div className="w-screen h-screen bg-white flex flex-col inset-shadow-[0_20px_30px_rgb(0,0,0,0.3)] relative">
            <div className="h-25"/>
            <div className="flex flex-row gap-11 mt-30 mx-auto items-end z-2">
                <ImageBox ofset={0} />
                <ImageBox ofset={-7} />
                <ImageBox ofset={-1} />
                <ImageBox ofset={-6} />
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