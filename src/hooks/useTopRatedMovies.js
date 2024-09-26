import {OPTIONS, TOP_RATED} from "../utilis/constant"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTopRatedMovies} from "../utilis/movieSlice"

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = async() => {
        const data = await fetch(TOP_RATED, OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(()=> {
        topRatedMovies()
    }, [])
}

export default useTopRatedMovies;