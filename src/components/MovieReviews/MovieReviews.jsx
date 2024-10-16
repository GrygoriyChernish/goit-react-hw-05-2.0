import useGetData from "../../hooks/useGetData.js";

import { authorName } from './MovieReviews.module.css'


const MovieReviews = () => {
    const {results = []} = useGetData('reviews')

    return <ul>
        {results.length === 0 ? <li>We don`t have any reviews for this movie</li> : results.map(({id, author, content}) => <li key={id}>
            <p className={authorName}>Author: {author}</p>
            <p>{content}</p>
        </li>)}
    </ul>
}

export default MovieReviews;