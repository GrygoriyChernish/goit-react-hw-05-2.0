import {useEffect, useState} from "react";
import useGetData from "../../hooks/useGetData.js";
import {useAxiosOptions} from "../../hooks/useAxiosOptions.js";
import axios from "axios";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

const MoviesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.inputValue.value.trim();
        console.log(query);
        if (query === '') return;
        setSearchQuery(query);

    }

    useEffect(()=>{
        if (searchQuery === '') return;
        const controller = new AbortController();
        const options = useAxiosOptions(controller.signal);
        async function getData() {
            const { data } = await axios(`search/movie?query=${searchQuery}`, options);
            setMovies(data.results);
            console.log(data)
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
    }, [searchQuery]);

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='inputValue'/>
            <button type='submit'>Search</button>
        </form>
        {movies.length === 0 ? <div>Not found</div> : <MoviesList movies={movies} /> }
    </>
}

export default MoviesPage;