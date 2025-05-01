import headerWhite from "../assets/header_bottom_white.png"

export default function Contact() {
    return (
        <div className="w-screen h-screen bg-[rgb(221,11,20)] flex flex-col relative">
            <img className="absolute h-[91px] w-[243px] scale-92 top-28 left-20 z-9" src={headerWhite} alt=""></img>
            <div className="w-full h-30 bg-white" />
            <div className="flex my-auto">
                <div className="flex flex-row y-auto gap-[6vw]">
                    <div className="w-[9vw] h-[60vh] bg-gray-600 my-auto ml-25" />
                    <div className="w-[40vw] h-[70vh] bg-gray-600 my-auto" />
                </div>
                <div className="w-[5vw] h-[30vh] bg-gray-600 ml-auto my-auto mr-[4vw]"></div>
            </div>
        </div>
    )
}