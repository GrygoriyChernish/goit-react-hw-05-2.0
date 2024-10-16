

export const useAxiosOptions = (signal) => {
    return {
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjUwNmU4OTI2Zjc0OWQ5OWI4M2JkNDk2ODMzYzA0ZiIsIm5iZiI6MTcyOTAxNDEwMi43NTU0MzMsInN1YiI6IjYwMTI4YzdjY2I4MDI4MDAzZTA4NTE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOLR1np3DAInHnEnFMHw4r_lXP9gV1px5fPbXgyjs7w'},
        signal
    }
}

'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'
'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'

// export const getTrendingMovies = async () => {
//     const data = await axios.get('trending/movie/day');
//     console.log(data)
// }

