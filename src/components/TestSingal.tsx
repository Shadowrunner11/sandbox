
import { useState } from "react";
import { createSignalRContext } from "react-signalr";

const context = createSignalRContext()

const { useSignalREffect, Provider, invoke } = context;

const Consumer = ()=> {

  const [miEstado, setMestado] = useState<any>();
    useSignalREffect("UserPasswordVigencyNotification", (me, m2) => {console.log(me, m2); setMestado(m2)}, [])

    const handleClick = ()=>{
      console.log('click')

    }

    return (<div data-testid='op'>
      <div><button onClick={handleClick}>test</button></div>
      <p>{miEstado?.toString()}</p>
    </div>)
  }


export const TestSingal =()=>{
  return(
    <Provider url={import.meta.env.PASSWORD_API+'/user/password/vigency'} >
    <Consumer/>
  </Provider>
  )
}
