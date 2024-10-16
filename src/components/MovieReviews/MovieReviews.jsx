import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {useAxiosOptions} from "../../hooks/useAxiosOptions.js";
import {authorName} from './MovieReviews.module.css'

const MovieReviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();


    useEffect(() => {
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getMovieCast() {
            const {data} = await axios(`movie/${movieId}/reviews`, options);
            setReviews(data.results);
            console.log(data.results);
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
    return <ul>
        {reviews.length === 0 ? <li>Not found</li> : reviews.map(({id, author, content}) => <li key={id}>
            <p className={authorName}>Author: {author}</p>
            <p>{content}</p>
        </li>)}
    </ul>
}

export default MovieReviews;