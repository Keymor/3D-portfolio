interface ComponentProps {
    ofset: number,
    img: string,
    positionX: number,
    positionY: number,
    scale: number,
    bgColor: string
}

export default function ImageBox({ ofset, img, positionX, positionY, scale, bgColor }: ComponentProps) {
    return (
        <div style={{ transform: `translateY(${ofset}vh)`, backgroundColor: bgColor }} className="h-[68vh] w-[18vw] bg-gray-500 rounded-[4rem] text-center shadow-2xl/70 hover:scale-102 duration-300">
            <img
                style={{ backgroundImage: img, backgroundPosition: `${positionX}vw ${positionY}vh`, backgroundSize: `${scale}%` }}
                alt=""
                className="opacity-50 hover:opacity-100 cursor-pointer duration-300 bg-no-repeat size-full rounded-[4rem] bg-cover" />
        </div>
    )
}