import { useSelector } from 'react-redux'
import { useMovieTrailer } from '../../../Hooks/useMovieTrailer'

function BackgroundVideo({ movie_id }) {

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer)
  useMovieTrailer(movie_id);
  console.log(movie_id);

  // console.log(movieTrailer?.key);
  return (
    <div className='' >
      <iframe
        className='w-full aspect-video  '
        src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1"} title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

      ></iframe>
    </div>
  )
}

export default BackgroundVideo