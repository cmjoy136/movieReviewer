import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CarouselItem from "./CarouselItem.jsx"

const Carousel = () => {
    const apiPopURL = 'https://api.themoviedb.org/3/movie/popular?api_key=20198fe77843ae9de92a02d9ce1e74c0&language=en-US&page=1'
    const imgURL = 'https://image.tmdb.org/t/p/w500/'
    const [status, setStatus] = useState('idle')
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchMovies = async() =>{
            setStatus('fetching')
            const data = await (await axios(apiPopURL)).data
            const results = data.results
            console.log(results)
            setMovies(results)
            setStatus('movies fetched')
        }

        fetchMovies()
    }, [])

    return(
        <div className="carousel">
            <ul>
                {movies.map(movie => <CarouselItem
                    src={imgURL + movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                />)}
            </ul>
        </div>
    )
}

export default Carousel