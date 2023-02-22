import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

interface GifGridProps {
    category: string
}

export const GifGrid = ({ category }: GifGridProps) => {
    const { gifs, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <section className='card-grid'>
                {
                    gifs.map((gif) => (<GifItem key={gif.id} {...gif} />))
                }
            </section>
        </>
    )
}
