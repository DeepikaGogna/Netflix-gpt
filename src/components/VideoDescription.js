import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoDescription = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    const trailerKey = trailerVideo?.key;
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`;

    useMovieTrailer(movieId)

    return (
        <div>
            <iframe className="w-screen aspect-video"
            src={youtubeEmbedUrl} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoDescription;