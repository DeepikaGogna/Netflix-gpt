import {IMAGE_CDN_URL} from "../utilis/constant"
const MovieCard = ({posterPath}) => {
    return (
            <div className="w-40 pr-2">
                <img src={IMAGE_CDN_URL +  posterPath} alt=""/>
            </div>
    )

}

export default MovieCard;