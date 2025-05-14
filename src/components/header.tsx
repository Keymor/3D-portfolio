import Button from "./button"
import header from "../assets/header_bottom.png"
import headerWhite from "../assets/header_bottom_white.png"
import logo from "/logo.png"
import { useState } from "react"

export default function Header() {
    const [slide, setSlide] = useState(false)

    return (
        <div className="fixed w-full h-20 sm:h-25 flex z-10">
            <div className="fixed w-full h-20 sm:h-25 flex border-2 border-white border-x-0 bg-[rgb(221,11,20)] mt-5 z-10">
                <img className="fixed left-11 top-7 scale-75 sm:left-38 sm:top-8 z-11 sm:scale-85" src={logo} />
                <p className="fixed hidden sm:block text-black fontFamLogo left-35 top-33 z-11">ALEXEY PETROV</p>
                <img className="fixed h-[91px] w-[243px] scale-55 sm:scale-90 top-19 sm:top-28 -left-8 sm:left-20 z-9" src={header} alt=""></img>
                <div className="flex-row mr-22 ml-auto my-auto h-fit gap-10 text-2xl hidden sm:flex">
                    <Button text="Home" scrollNum={0} />
                    <Button text="Portfolio" scrollNum={1} />
                    <Button text="About" scrollNum={2} />
                    <Button text="Contacts" scrollNum={3} />
                </div>
                <div onClick={() => setSlide(!slide)} className="sm:hidden flex mr-5 ml-auto my-auto bg-[url('/menuMob.png')] bg-contain bg-no-repeat h-5 w-8">
                </div>
            </div>
            <img className="fixed h-[91px] w-[243px] scale-56 sm:scale-92 top-19.5 sm:top-28.5 -left-8 sm:left-20 z-5" src={headerWhite} alt=""></img>
            <div style={{ transform: slide ? 'translateX(100%)' : 'translateX(0%)' }} onClick={() => setSlide(!slide)} className="bg-[rgb(221,11,20)] gap-10 flex flex-col shadow-2xl w-full h-screen absolute z-20 duration-300">
                <div className="flex flex-col mt-auto mx-auto gap-3 text-2xl">
                    <Button text="Home" scrollNum={0} />
                    <Button text="Portfolio" scrollNum={1} />
                    <Button text="About" scrollNum={2} />
                    <Button text="Contacts" scrollNum={3} />
                </div>
                <div className="w-2/3 h-5 flex flex-row gap-4 mb-auto mx-auto">
                    <a href="https://www.artstation.com/petrov_alexey" target="_blank" className="cursor-pointer sm:mx-auto sm:mt-auto">
                        <div className="size-15 bg-[url('/link1.png')] bg-contain bg-no-repeat" />
                    </a>
                    <a href="https://www.instagram.com/petrov.photography?igsh=MTVuZGp2MDgzYmU2Zg==" target="_blank" className="cursor-pointer mx-auto">
                        <div className="size-15 bg-[url('/link2.png')] bg-contain bg-no-repeat" />
                    </a>
                    <a href="https://www.linkedin.com/in/oleksii-petrov-82a19b238/" target="_blank" className="cursor-pointer mx-auto">
                        <div className="size-15 bg-[url('/link3.png')] bg-contain bg-no-repeat" />
                    </a>
                    <a href="" target="_blank" className="cursor-pointer mx-auto mb-auto">
                        <div className="size-15 bg-[url('/link4.png')] bg-contain bg-no-repeat" />
                    </a>
                </div>
                <img src="/logo.png" className="h-20 w-18 absolute top-20 left-12 z-20" />
                <div className="w-30 h-20 absolute top-40 right-0 z-20 bg-contain -scale-x-100 bg-[url('/fig3.png')] bg-no-repeat" />
                <div className="w-50 h-40 absolute bottom-10 left-0 z-20 bg-contain bg-[url('/fig3.png')] bg-no-repeat" />
                <div className=" absolute scale-350 rotate-45 top-23 right-12">+</div>
            </div>
        </div>
    )
}

