import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en useFetchGifs hook', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'))
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('debe de regresar arreglo de imagenes e isLoading', async () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'))
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})