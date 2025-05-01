interface ComponentProps {
    ofset: number
}

export default function ImageBox({ofset}: ComponentProps) {
    return (
        <div style={{transform: `translateY(${ofset}vh)`}} className="h-[68vh] w-[18vw] bg-gray-500 rounded-[4rem] text-center">
            <img src="" alt="" />
            Image holder
        </div>
    )
}