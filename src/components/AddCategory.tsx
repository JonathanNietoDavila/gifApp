import React, { useState } from 'react'

interface AddCategoryProps {
    setCategories?: Function
    onListenCategory: Function
}

export const AddCategory = ({ onListenCategory }: AddCategoryProps) => {
    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e?.target?.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) {
            return
        }
        onListenCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            {/* <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e)} /> */}
            <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
        </form>
    )
}
