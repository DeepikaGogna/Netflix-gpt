import {OPTIONS, UPCOMING_MOVIE} from "../utilis/constant"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../utilis/movieSlice"

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = async() => {
        const data = await fetch(UPCOMING_MOVIE, OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(()=> {
        upcomingMovies()
    }, [])
}

export default useUpComingMovies;