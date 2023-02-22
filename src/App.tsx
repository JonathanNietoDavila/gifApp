import { useState } from 'react'
import { AddCategory, GifGrid } from './components/'


export const App = () => {
    const [categories, setCategories] = useState<string[]>(['Dragon Ball'])

    const onAddCategory = (category: string) => {
        if (categories.includes(category)) {
            return
        }
        setCategories(cts => [category, ...cts])
    }

    return (
        <>
            <h1>Gif App</h1>

            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory onListenCategory={onAddCategory} />

            {
                categories.map((category: string) => (<GifGrid key={category} category={category} />))
            }
        </>
    )
}
