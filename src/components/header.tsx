import Button from "./button"

export default function Header() {

    return (
        <div className="fixed w-full h-25 flex border-2 border-white border-x-0 bg-red-400 mt-5 z-10">
            <div className="w-79 h-45 rounded-2xl [clip-path:polygon(0_0,100%_0%,70%_100%,30%_100%)] bg-red-400 ml-11 border-b-2 border-white" />
            <div className="flex flex-row mr-22 ml-auto my-auto h-fit gap-10 text-2xl">
                <Button text="Home" scrollNum={0}/>
                <Button text="Portfolio" scrollNum={1}/>
                <Button text="About" scrollNum={2}/>
                <Button text="Contacts" scrollNum={3}/>
            </div>
        </div>
    )
}

