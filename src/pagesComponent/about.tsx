export default function About() {
    return (
        <div className="w-screen h-screen bg-gray-500 flex flex-row relative gap-[15vw]">
            <div className="flex flex-col gap-[5vh] ml-auto my-auto">
                <h1 className="text-9xl font-bold">ABOUT ME</h1>
                <p className="w-[40vw] h-100 bg-gray-600 text-center">some text</p>
            </div>
            <div className="flex mr-auto mt-auto mb-[3vh]">
                <div className="w-[30vw] h-[80vh] bg-gray-600 rounded-4xl text-center">photo</div>
            </div>
        </div>
    )
}