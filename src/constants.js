export const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
export const movieURL = (movieID) => {
    return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}
export const actorsURL =  (movieID =>{
    return `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

})
export const imgURL = `https://image.tmdb.org/t/p/w300/`