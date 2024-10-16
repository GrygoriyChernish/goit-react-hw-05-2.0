import {useEffect, useState} from "react";
import axios from "axios";
import {useAxiosOptions} from "../../hooks/useAxiosOptions.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";



const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getTrendingMovies() {
            const {data} = await axios('trending/movie/day', options);
            setMovies(data.results);
        }
        try {
            getTrendingMovies().catch((error) => {
                console.log(error.message);});
        } catch (error) {
            console.log(error);
        }
        return ()=>{
            controller.abort();
        }
    }, [])
    return <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
}

export default HomePage;