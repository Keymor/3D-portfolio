export default function About() {
    return (
        <div className="w-screen h-screen bg-[rgb(40,36,33,1)] flex flex-col sm:flex-row relative pt-30">
            <div className="flex flex-col gap-1 sm:gap-[5vh] m-auto z-1">
                <div className=" relative flex">
                    <h1 className="text-7xl sm:text-[12rem] font-bold fontAbout text-white z-9 relative">ABOUT ME</h1>
                    <div className="absolute bg-no-repeat sm:-top-20 sm:left-140 sm:size-50 size-20 left-80 -top-10 bg-contain bg-[url('/figP1.png')] z-1" />
                </div>
                <p className=" tracking-tight leading-4.5 sm:leading-[1.6rem] flex w-[90vw] line sm:w-[45vw] h-fit text-white fontFam">
                    Hi! I'm Alexey Petrov — a passionate 3D artist and<br />
                    prop designer.<br />
                    I specialize in creating detailed models, bringing ideas to life<br />
                    with precision and creativity.<br />
                    From realistic grenades to vintage crates,I love adding story<br />
                    and soul into every piece.<br />
                    Always learning, always evolving —<br />
                    let’s create something amazing together!</p>
            </div>
            <div className="flex mb-auto mx-auto sm:mr-auto sm:my-auto">
                <div style={{ backgroundSize: '150%', backgroundPosition: '55% 30%' }} className="w-[80vw] h-[30vh] sm:w-[30vw] sm:h-[78vh] bg-gray-600 rounded-4xl bg-[url('/photo.jpg')] shadow-2xl/100 z-1" />
            </div>
            <div className="absolute bg-no-repeat top-120 sm:top-60 right-0 h-50 w-30 bg-contain bg-[url('/figP2.png')] z-0" />
            <div className="absolute bg-no-repeat bottom-30 left-10 size-15 bg-contain bg-[url('/figP3.png')]" />
            <div className="absolute bg-no-repeat bottom-0 left-1/7 sm:left-1/2 h-50 w-52 bg-contain bg-[url('/figP4.png')]" />
        </div>
    )
}