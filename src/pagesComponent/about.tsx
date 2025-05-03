export default function About() {
    return (
        <div className="w-screen h-screen bg-[rgb(40,36,33,1)] flex flex-row relative gap-[20vw]">
            <div className="flex flex-col gap-[5vh] ml-auto my-auto z-1">
                <h1 className="text-9xl font-bold fontAbout relative text-white">ABOUT ME</h1>
                <p style={{letterSpacing: '0.1rem', lineHeight: '1.6rem'}} className="w-[30vw] h-100 text-white fontFam">
                    Hi! I'm Alexey Petrov — a passionate 3D artist and<br/>
                    prop designer.<br/>
                    I specialize in creating detailed models, bringing ideas to life<br/>
                    with precision and creativity.<br/>
                    From realistic grenades to vintage crates,I love adding story<br/>
                    and soul into every piece.<br/>
                    Always learning, always evolving —<br/>
                    let’s create something amazing together!</p>
            </div>
            <div className="flex mr-auto mt-auto mb-[3vh]">
                <div style={{backgroundSize: '150%', backgroundPosition: '55% 36%'}} className="w-[30vw] h-[80vh] bg-gray-600 rounded-4xl bg-[url('/photo.jpg')] shadow-2xl/100"/>
            </div>
            <div className="absolute bg-no-repeat top-60 left-209 size-50 bg-contain bg-[url('/figP1.png')]"/>
            <div className="absolute bg-no-repeat top-80 right-0 h-70 w-35 bg-contain bg-[url('/figP2.png')]"/>
            <div className="absolute bg-no-repeat bottom-80 left-10 size-15 bg-contain bg-[url('/figP3.png')]"/>
            <div className="absolute bg-no-repeat bottom-0 left-1/2 h-50 w-52 bg-contain bg-[url('/figP4.png')]"/>
        </div>
    )
}