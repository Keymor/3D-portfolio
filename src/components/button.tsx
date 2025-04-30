interface ButtonProps {
    text: string
}

export default function Button({text}: ButtonProps) {
    return (
        <button className="p-2 text-2xl cursor-pointer relative">
            <div className="min-w-full h-9 absolute group">
                <div className="min-w-[110%]  h-[0.15rem] bg-white absolute -bottom-1 -translate-x-[12%] hidden group-hover:block" />
            </div>
            {text}
        </button>
    )
}