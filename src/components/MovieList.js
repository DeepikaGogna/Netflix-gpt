import MovieCard from "./MovieCard"
const MovieList = ({title, movies}) => {
    console.log("movies", movies)
    return (
        <div className="p-4">
            <h1 className="text-2xl my-2 py-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
        <div className="flex">
           {movies ? movies.map(movie =>
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>) : ""}
        </div>
    </div>
</div>
        
    )}
export default MovieList