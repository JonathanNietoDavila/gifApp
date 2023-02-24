import 'whatwg-fetch'
import { Datum, Welcome } from '../models/GifResponse'

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eYefR1oE4myVOBUHFK4Hd7RlD6acqRLF&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data }: Welcome = await resp.json()

    const gifs = data.map((d: Datum) => ({ id: d.id, title: d.title, url: d.images.downsized.url }))
    return gifs
}