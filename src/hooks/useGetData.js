import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxiosOptions } from "./useAxiosOptions.js";


const useGetData = (url) => {
    const [data, setData] = useState({});
    const { movieId } = useParams();
    let searchUrl = '';

    switch (url) {
        case 'trending':
            searchUrl = 'trending/movie/day';
            break;
        case 'details':
            searchUrl = `movie/${movieId}`;
            break;
        case 'cast':
            searchUrl = `movie/${movieId}/credits`;
            break;
        case 'reviews':
            searchUrl = `movie/${movieId}/reviews`;
            break;
        default:
            searchUrl = '';
    }



    useEffect(() => {
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getData() {
            const { data } = await axios(searchUrl, options);
            setData(data);
        }
        try {
            getData().catch((error) => {
                console.log(error.message);});
        } catch (error) {
            console.log(error);
        }
        return ()=>{
            controller.abort();
        }
    }, [])

    return data;
}

export default useGetData