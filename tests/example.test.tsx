import { it } from 'vitest'

import { render } from '@testing-library/react'

import { createSignalRContext } from "react-signalr";
import { useState } from 'react';

const context = createSignalRContext()

const { useSignalREffect, Provider } = context;

it('spy', async ()=>{
  const Consumer = ()=> {

  const [miEstado, setMestado] = useState<any[]>([]);
    useSignalREffect("event name", me => setMestado(prev => [...prev, ...me]), [miEstado])

    console.log(miEstado)
    return (<div data-testid='op'>
      <p>{miEstado}</p>
    </div>)
  }

  const {getByTestId} = render(<Provider url={'http://localhost:5126/chatHub'}  >
    <Consumer/>
  </Provider>)

  getByTestId('op')
})
