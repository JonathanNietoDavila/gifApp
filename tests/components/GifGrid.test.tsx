import React from "react"
import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid component', () => {

    const category = "Dragon Ball"
    test('debe de mostrar el loading', () => {
        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        // screen.debug()

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar imagenes cuando se carguen desde', () => {
        const gifs = [
            {
                id: 1,
                title: 'Cargando',
                url: "https://media.giphy.com/media/l0000000000000001/giphy.gif"
            },
            {
                id: 2,
                title: 'Cargando',
                url: "https://media.giphy.com/media/l0000000000000002/giphy.gif"
            },
            {
                id: 3,
                title: 'Cargando',
                url: "https://media.giphy.com/media/l0000000000000003/giphy.gif"
            },
        ];

        (useFetchGifs as jest.Mock).mockReturnValue({
            gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        // screen.debug()

        expect(screen.getAllByRole('img').length).toBe(3)
        // expect(screen.getByText(category))
    })
})