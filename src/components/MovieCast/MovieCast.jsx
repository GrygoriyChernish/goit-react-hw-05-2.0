import axios from "axios";

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {useAxiosOptions} from "../../hooks/useAxiosOptions.js";
import {list} from './MovieCast.module.css';

import profilePlaceholder from '/public/actorPhotoPlaceholderSVG.svg'

const MovieCast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();


    useEffect(() => {
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getMovieCast() {
            const {data} = await axios(`movie/${movieId}/credits`, options);
            setCast(data.cast);
            console.log(data.cast)
        }
        try {
            getMovieCast().catch((error) => {
                console.log(error.message);});
        } catch (error) {
            console.log(error);
        }
        return ()=>{
            controller.abort();
        }
    }, [])
    return <>
        {cast && <ul className={list}>
            {cast.map(({id, profile_path, original_name, character}) => <li key={id}>
                <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : profilePlaceholder} alt={original_name}/>
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
            </li>)}
        </ul>}
    </>
}

export default MovieCast;