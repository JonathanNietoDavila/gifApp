import React from 'react';
import { render } from '@testing-library/react';

import { GifItem } from '../../src/components'

/**
 * @jest-environment jsdom
 */
describe('Pruebas en GifItem', () => {
    const id = 'pruebas-en-gif-item'
    const title = 'Pruebas en GifItem'
    const url = 'https://www.youtube.com/watch'
    test('should first', () => {
        const { container } = render(<GifItem id={id} title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
})