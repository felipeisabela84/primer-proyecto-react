import { NavLink, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Sumadora from './pages/Sumadora'
import NumerosALetras from './pages/NumerosALetras'
import TablaMultiplicar from './pages/TablaMultiplicar'
import Experiencia from './pages/Experiencia'

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '16px', padding: '12px' }}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sumadora">Sumadora</NavLink>
        <NavLink to="/numeros">Números a letras</NavLink>
        <NavLink to="/tabla">Tabla de multiplicar</NavLink>
        <NavLink to="/experiencia">Experiencia</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/numeros" element={<NumerosALetras />} />
        <Route path="/tabla" element={<TablaMultiplicar />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </div>
  )
}