
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mm1 from './Pages/MM1/Mm1';
import Mmm from './Pages/MMM/mmm';
import MM1fin from './Pages/MM1Fin/MM1fin'
import MD1 from './Pages/MD1/MD1'

function App() {
  


  return (
    <>
      <BrowserRouter>
              <Routes>
                  <Route path="https://ignaciochava.github.io/calculadora/" element={<Mm1></Mm1>} />
                       <Route path="https://ignaciochava.github.io/calculadora/MMM" element={<Mmm />} />

                       <Route path="https://ignaciochava.github.io/calculadora/MM1Fin" element={<MM1fin />} />
                       <Route path="https://ignaciochava.github.io/calculadora/MD1" element={<MD1 />} />
                  <Route/>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
