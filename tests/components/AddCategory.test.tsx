import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory component', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onListenCategory={() => { }} />)
        const input = screen.getByRole('textbox') as HTMLInputElement
        fireEvent.input(input, { target: { value: 'Homero' } })

        expect(input.value).toBe('Homero')
        // screen.debug()
    })

    test('debe de llamar onListenCategory si el input tiene un valor', () => {
        const onListenCategory = jest.fn();

        render(<AddCategory onListenCategory={onListenCategory} />)

        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'Dragon Ball' } })
        expect(input.value).toBe('Dragon Ball')
        fireEvent.submit(form)

        expect(onListenCategory).toHaveBeenCalled()
        expect(onListenCategory).toHaveBeenCalledTimes(1)
        expect(onListenCategory).toHaveBeenCalledWith('Dragon Ball')


        // screen.debug()
    })

    test('node debe de llamar onListenCategory si el input no tiene un valor', () => {
        const onListenCategory = jest.fn();

        render(<AddCategory onListenCategory={onListenCategory} />)

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        /* validating conditional 1era forma */
        // expect(onListenCategory).toHaveBeenCalledTimes(0)
        
        /* validating conditional 2da forma */
        expect(onListenCategory).not.toHaveBeenCalled()
    })
})