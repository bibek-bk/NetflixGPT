
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'
import BackgroundVideo from './backgroundVideo'
function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return;

    const { original_title, overview, id } = movies[10]
    return (
        <>
        <div >

            <Title title={original_title} overview={overview} />
            <BackgroundVideo movie_id={id} />
        </div>
        </>
    )
}

export default MainContainer