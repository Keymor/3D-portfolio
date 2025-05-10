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
        <div style={{ transform: `translateY(${ofset}vh)`, backgroundColor: bgColor}} className=" absolute sm:block h-[40vh] w-[65vw] sm:h-[68vh] sm:w-[18vw] bg-gray-500 rounded-3xl my-auto sm:my-0 sm:rounded-[4rem] text-center sm:shadow-2xl/70 hover:scale-102 duration-1000">
            <img
                style={{ backgroundImage: img, backgroundPosition: `${positionX}vw ${positionY}vh`, backgroundSize: `${scale}%` }}
                alt=""
                className="sm:opacity-50 sm:hover:opacity-100 cursor-pointer duration-300 bg-no-repeat size-full rounded-3xl sm:rounded-[4rem] bg-cover" />
        </div>
    )
}