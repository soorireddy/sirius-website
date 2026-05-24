import { createContext, useContext, useState } from 'react'
import DemoModal from '../components/DemoModal'

const Ctx = createContext(null)

export function DemoModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <Ctx.Provider value={{ openDemo: () => setOpen(true) }}>
      {children}
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </Ctx.Provider>
  )
}

export function useDemo() {
  return useContext(Ctx)
}
