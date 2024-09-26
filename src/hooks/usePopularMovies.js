import {OPTIONS, POPULAR_PLAYING} from "../utilis/constant"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utilis/movieSlice"

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = async() => {
        const data = await fetch(POPULAR_PLAYING, OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=> {
        popularMovies()
    }, [])
}

export default usePopularMovies;