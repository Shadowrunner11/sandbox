import { Dialog } from "@mui/material"
import { useOnExitPage } from "../hooks/useOnexitPage"
import { useState } from "react"

export const Test = ()=>{
  const [isOpen, setIsOpen] = useState(false)
  
  useOnExitPage(()=>{
    setIsOpen(true)
  })

  return (
    <Dialog open={isOpen} >
      asdsadsad
    </Dialog>
  )
}
