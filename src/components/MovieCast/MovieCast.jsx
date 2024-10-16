import useGetData from "../../hooks/useGetData.js";

import { list } from './MovieCast.module.css';
import profilePlaceholder from '/public/actorPhotoPlaceholderSVG.svg'


const MovieCast = () => {
    const { id, cast } = useGetData('cast');

    return <>
        { id && <ul className={list}>
            {cast.map(({id, profile_path, original_name, character}) => <li key={id}>
                <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : profilePlaceholder} alt={original_name}/>
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
            </li>)}
        </ul> }
    </>
}

export default MovieCast;