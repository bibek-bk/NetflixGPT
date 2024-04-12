import { useEffect } from "react"
import { API_OPTIONS, nowPlayingUrl } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/store/movieSlice"
import { useDispatch } from 'react-redux'

export const useNowPlaying = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        NowPlaying()
    }, [])

    const NowPlaying = async () => {
        const data = await fetch(nowPlayingUrl, API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

}
