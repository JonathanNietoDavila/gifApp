import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category: string) => {
    const [gifs, setGifs] = useState<{ id: string; title: string; url: string; }[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifImages = async () => {
        const gifImgs = await getGifs(category)
        setGifs(gifImgs)
        setIsLoading(false)
    }

    useEffect(() => {
        getGifImages()
    }, [])

    return { gifs, isLoading }
}
