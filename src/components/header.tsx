import Button from "./button"
import header from "../assets/header_bottom.png"
import headerWhite from "../assets/header_bottom_white.png"
import logo from "/logo.png"

export default function Header() {

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
                <div className="sm:hidden flex mr-10 ml-auto my-auto">Menu</div>
            </div>
            <img className="fixed h-[91px] w-[243px] scale-56 sm:scale-92 top-19.5 sm:top-28.5 -left-8 sm:left-20 z-5" src={headerWhite} alt=""></img>
        </div>
    )
}

