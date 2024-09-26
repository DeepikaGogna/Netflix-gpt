import { useEffect } from "react";
import {OPTIONS, MOVIE_VIDEO} from "../utilis/constant"
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utilis/movieSlice"

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const url = MOVIE_VIDEO.replace('movieId', movieId);
    const getMovieVideo  = async() =>{
        const data = await fetch(url, OPTIONS)
        const json =  await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    },[])
}

export default useMovieTrailer