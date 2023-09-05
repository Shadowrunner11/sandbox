import { useEffect } from "react"


export const useOnExitPage = (cb: ()=> unknown )=>{
  const listenerHandler: EventListenerOrEventListenerObject = (event)=>{
    event.preventDefault()
    cb();

    return ''
  }

  useEffect(()=>{
    window.onbeforeunload = listenerHandler

    return ()=> window.removeEventListener('beforeunload', listenerHandler)
  }, [])
}
