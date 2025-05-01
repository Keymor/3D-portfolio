interface ButtonProps {
    text: string,
    scrollNum: number
}

export default function Button({ text, scrollNum}: ButtonProps) {

    const windowPlace = () => {
        const screen = window.innerHeight * scrollNum
        window.scrollTo({ top: screen, behavior: 'smooth' })
    }

    return (
        <button onClick={windowPlace} className="p-2 text-2xl text-white cursor-pointer relative">
            <div className="min-w-full h-9 absolute group">
                <div className="min-w-[110%]  h-[0.15rem] bg-white absolute -bottom-1 -translate-x-[12%] hidden group-hover:block" />
            </div>
            {text}
        </button>
    )
}