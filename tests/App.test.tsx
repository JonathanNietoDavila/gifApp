import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"

import { App } from '../src/App'

describe('pruebas en App component', () => {

    test('cuando hay algun valor en el input', () => {
        render(<App />)
        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'Homero' } })
        expect(input.value).toBe('Homero')
        fireEvent.submit(form)
    })

    test('cuando se envía el mismo valor dos veces en el input', () => {
        render(<App />)
        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: 'Homero' } })
        expect(input.value).toBe('Homero')
        fireEvent.submit(form)
        fireEvent.input(input, { target: { value: 'Homero' } })
        fireEvent.submit(form)
    })
})