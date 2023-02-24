import React from 'react';
import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components'

/**
 * @jest-environment jsdom
 */
describe('Pruebas en GifItem', () => {
    const id = 'pruebas-en-gif-item'
    const title = 'Pruebas en GifItem'
    const url = 'https://www.youtube.com/watch'
    
    test('snapshot', () => {
        const { container } = render(<GifItem id={id} title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
    
    test('should debe de mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItem id={id} title={title} url={url} />)
        // screen.debug()
        const { src, alt }  = screen.getByRole('img') as HTMLImageElement
        expect(src).toBe('https://www.youtube.com/watch')
        expect(alt).toBe('Pruebas en GifItem')
     })

     test('should debe de mostrar el titulo en el componente', () => { 
        render(<GifItem id={id} title={title} url={url} />)
        screen.getByText('Pruebas en GifItem')
      })
})