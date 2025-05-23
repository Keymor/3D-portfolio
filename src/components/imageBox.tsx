interface ComponentProps {
    ofset: number,
    img: string,
    positionX: number,
    positionY: number,
    scale: number,
    bgColor: string,
    w: string,
    opacity: number
}

export default function ImageBox({ ofset, img, positionX, positionY, scale, bgColor, w, opacity }: ComponentProps) {

    return (
        <div style={{ transform: `translateY(${ofset}vh)`, backgroundColor: bgColor, width: w }} className="h-[50vw] w-[22vw] xl:h-[68lvh] xl:w-[18vw] bg-gray-500 my-0 rounded-[4rem] text-center shadow-2xl/70 duration-1000">
            <img
                style={{ backgroundImage: img, backgroundPosition: `${positionX}vw ${positionY}vh`, backgroundSize: `${scale}%`, opacity: opacity }}
                alt=""
                className=" cursor-pointer duration-1000 size-full rounded-3xl sm:rounded-[4rem] bg-cover" />
        </div>
    )
}