import React from 'react'

interface GifItemProps {
    id: string;
    title: string;
    url: string;
}
export const GifItem = ({ id, title, url }: GifItemProps) => {
    return (
        <section className='card'>
            <p>{title}</p>
            <img key={id} alt={title} src={url} />
        </section>
    )
}
