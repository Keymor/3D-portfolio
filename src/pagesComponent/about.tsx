export default function About() {
    return (
        <div className="w-screen h-screen bg-[rgb(40,36,33,1)] flex flex-row relative pt-30">
            <div className="flex flex-col gap-[5vh] m-auto z-1">
                <div className="relative">
                    <h1 className="text-9xl font-bold fontAbout text-white z-9 relative">ABOUT ME</h1>
                    <div className="absolute bg-no-repeat -top-20 left-140 size-50 bg-contain bg-[url('/figP1.png')] z-1" />
                </div>
                <p style={{ letterSpacing: '0.1rem', lineHeight: '1.6rem' }} className="w-[45vw] h-[32vh] text-white fontFam">
                    Hi! I'm Alexey Petrov — a passionate 3D artist and<br />
                    prop designer.<br />
                    I specialize in creating detailed models, bringing ideas to life<br />
                    with precision and creativity.<br />
                    From realistic grenades to vintage crates,I love adding story<br />
                    and soul into every piece.<br />
                    Always learning, always evolving —<br />
                    let’s create something amazing together!</p>
            </div>
            <div className="flex mr-auto my-auto">
                <div style={{ backgroundSize: '150%', backgroundPosition: '55% 36%' }} className="w-[30vw] h-[78vh] bg-gray-600 rounded-4xl bg-[url('/photo.jpg')] shadow-2xl/100 z-1" />
            </div>
            <div className="absolute bg-no-repeat top-60 right-0 h-50 w-30 bg-contain bg-[url('/figP2.png')] z-0" />
            <div className="absolute bg-no-repeat bottom-30 left-10 size-15 bg-contain bg-[url('/figP3.png')]" />
            <div className="absolute bg-no-repeat bottom-0 left-1/2 h-50 w-52 bg-contain bg-[url('/figP4.png')]" />
        </div>
    )
}