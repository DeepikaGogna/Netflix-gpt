const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg w-1/4">{overview}</p>
            <div className="mt-2">
            <button className="text-black rounded-lg text-xl bg-white px-6 p-2 mr-2 hover:opacity-50">
               ▶️ Play
                </button>
            <button className="text-xl text-white bg-gray-500 p-2 px-6 rounded-lg">More Info</button>
            </div>
        </div>  
    )
}

export default VideoTitle;