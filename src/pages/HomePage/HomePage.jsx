import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import useGetData from "../../hooks/useGetData.js";



const HomePage = () => {
    const { results } = useGetData('trending');

    return <>
      <h1>Trending today</h1>
      <MoviesList movies={results} />
    </>
}

export default HomePage;