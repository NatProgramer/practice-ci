import { useState } from 'react'
import viteLogo from '../public/vite.svg'
import './App.css'
import Footer from './Components/Footer'

export default function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
       <h1>Vite</h1>
         <div className="card">
        <button onClick={() => { setCount((count) => count + 1) }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Footer />
    </>
  )
}