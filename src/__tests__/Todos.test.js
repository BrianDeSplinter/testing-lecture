import React from 'react'
import {render, act} from '@testing-library/react'
import axios from 'axios'
import Todos from '../components/Todos'
import { faItalic } from '@fortawesome/free-solid-svg-icons'

it('Renders todos', async () => {
    let components
    jest.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({data: [{id:1, title: 'test title'}]})
    })

    await act(async () => {
        const {container} = render(<Todos/>)
        component = container
    })

    expect(component.textContent).toContain('test title')
})