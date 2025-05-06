import headerWhite from "../assets/header_bottom_white.png"
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.current) return console.log('null')

        emailjs
            .sendForm(
                'service_tbl0r6f',
                'template_hbi0w37',
                form.current,
                '2I3W6OJSPYLXlSPTm'
            )
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                },
                (error) => {
                    console.error('Email error:', error.text);
                }
            );
    };

    return (
        <div className="w-screen h-screen bg-[rgb(221,11,20)] flex flex-col relative">
            <img className="absolute h-[91px] w-[243px] scale-92 top-28 left-20 z-9" src={headerWhite} alt=""></img>
            <div className="w-full h-30 bg-white" />
            <div className="w-[220px] h-[60vh] my-auto ml-23 absolute top-1/4 left-0">
                <h1 className="fontContact leading-[8vw] ml-auto mr-auto pl-[1vw]">CONTACT</h1>
            </div>
            <div className="flex relative my-auto pt-25 z-1">
                <div className="flex flex-row ml-[25%]">
                    <form ref={form} onSubmit={sendEmail} className="w-[50vw] h-[40vh] my-auto flex flex-col">
                        <div style={{ letterSpacing: '0.1rem' }} className="w-fit gap-x-[5vw] h-2/3 grid grid-cols-2">
                            <div className="w-fit h-fit flex flex-col fontFamLogo gap-1">
                                <h2>Name *</h2>
                                <input required name="name" type="text" className="outline-0"></input>
                                <div className="w-[15vw] h-0.5 bg-white" />
                            </div>
                            <div className="w-fit h-fit flex flex-col fontFamLogo gap-1">
                                <h2>Company</h2>
                                <input name='company' type="text" className="outline-0"></input>
                                <div className="w-[15vw] h-0.5 bg-white" />
                            </div>
                            <div className="w-fit h-fit flex flex-col fontFamLogo gap-1">
                                <h2>E-mail *</h2>
                                <input required name="email" type="email" className="outline-0"></input>
                                <div className="w-[15vw] h-0.5 bg-white" />
                            </div>
                            <div className="w-fit h-fit flex flex-col fontFamLogo gap-1">
                                <h2>Phone</h2>
                                <input name="phone" type="text" className="outline-0"></input>
                                <div className="w-[15vw] h-0.5 bg-white" />
                            </div>
                        </div>
                        <div className="w-[35vw] h-fit flex flex-col fontFamLogo gap-3 my-auto z-1">
                            <h2>Whant to know more? Drop us a line.</h2>
                            <input name='lineField' type="text" className="outline-0"></input>
                            <div className="w-full h-0.5 bg-white z-1" />
                        </div>
                        <button type="submit" className="p-3 min-w-38 translate-x-1/2 bg-[rgb(33,33,33)] rounded-4xl absolute -bottom-20 right-1/2 cursor-pointer flex flex-row z-10">
                            <div className="size-9 rounded-full bg-amber-50 my-auto flex" >
                                <div className="size-8 bg-red-800 rounded-full m-auto" />
                            </div>
                            <p className="fontFam m-auto">Send</p>
                        </button>
                    </form>
                </div>
                <div className="w-[5vw] h-[30vh] ml-auto my-auto mr-[4vw] flex flex-col gap-4">

                    <a href="https://www.artstation.com/petrov_alexey" target="_blank" className="cursor-pointer mx-auto mt-auto">
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
            </div>
            <div className=" bg-[url('/logoBig.png')] h-[45vh] w-[27vw] absolute bottom-0 right-1/9 bg-no-repeat bg-cover opacity-25 z-0" />
            <div className="bg-[url('/figCont.png')] h-50 w-80 absolute top-[20vh] right-0 bg-no-repeat" />
            <div className="w-full h-10"/>
        </div>
    )
}