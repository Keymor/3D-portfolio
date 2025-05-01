import ImageBox from "../components/imageBox";

export default function Portfolio() {
    return (
        <div className="w-screen h-screen bg-gray-300 flex flex-col">
            <div className="flex flex-row gap-11 mt-30 mx-auto translate-y-[0vh] items-end">
                <ImageBox ofset={0} />
                <ImageBox ofset={-7} />
                <ImageBox ofset={-1} />
                <ImageBox ofset={-6} />
                <div className="w-45 bg-gray-600 h-[75vh] my-auto">
                    {/* <h1 className="text-black font-bold scale-y-200 scale-x-152 rotate-90 m-0 -mt-35 text-9xl scale-125 w-20 h-55">PORTFOLIO</h1> */}
                </div>
            </div>
            <div className="text-black m-auto">- o o o -</div>
        </div>
    )
}