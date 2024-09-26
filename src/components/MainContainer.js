import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoDescription from "./VideoDescription";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(!movies) return;
    
    const mainMovie = movies[0];
    const {title, overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title = {title} overview={overview} />
            <VideoDescription movieId = {id} />
        </div>
    )
}

export default MainContainer;