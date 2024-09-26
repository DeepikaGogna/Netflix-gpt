import {OPTIONS, NOW_PLAYING} from "../utilis/constant"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utilis/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = async() => {
        const data = await fetch(NOW_PLAYING, OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=> {
        nowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;