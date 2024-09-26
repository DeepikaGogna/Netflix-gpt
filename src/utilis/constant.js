export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const TMTB_API_KEY ="b462f6c639b0e1fca885284846196e23"
export const TMTB_API_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDYyZjZjNjM5YjBlMWZjYTg4NTI4NDg0NjE5NmUyMyIsIm5iZiI6MTcyNzI0MTQyMy4xOTM3NTQsInN1YiI6IjY2ZjM5YjhmM2E5NWE1YmNkYTIyZTUxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M9jiJuZ6q44QZeoN3pqFlq5ddAuqy8gDX-9fqB0HJDg"
export const MOVIE_VIDEO = "https://api.themoviedb.org/3/movie/movieId/videos?language=en-US";
export const OPTIONS = {method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMTB_API_TOKEN

    }
};
export const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const POPULAR_PLAYING = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIE = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

 