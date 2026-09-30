import { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Sumadora from './pages/Sumadora'
import NumerosALetras from './pages/NumerosALetras'
import TablaMultiplicar from './pages/TablaMultiplicar'
import Experiencia from './pages/Experiencia'

const enlaces = [
  { to: '/', texto: 'Inicio', icono: '🏠' },
  { to: '/sumadora', texto: 'Sumadora', icono: '➕' },
  { to: '/numeros', texto: 'Números a letras', icono: '🔤' },
  { to: '/tabla', texto: 'Tabla de multiplicar', icono: '✖️' },
  { to: '/experiencia', texto: 'Experiencia', icono: '🎬' },
]

export default function App() {
  const [abierto, setAbierto] = useState(() => window.innerWidth >= 768)

  const cerrarEnCelular = () => {
    if (window.innerWidth < 768) setAbierto(false)
  }

  return (
    <div>
      <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>
        <h1 className="logo">Mi App</h1>
        <nav>
          {enlaces.map((e) => (
            <NavLink
              key={e.to}
              to={e.to}
              end={e.to === '/'}
              className={({ isActive }) => (isActive ? 'enlace activo' : 'enlace')}
              onClick={cerrarEnCelular}
            >
              <span>{e.icono}</span> {e.texto}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className={`contenido ${abierto ? 'con-barra' : ''}`}>
        <header className="topbar">
          <button className="hamburguesa" onClick={() => setAbierto(!abierto)}>
            ☰
          </button>
          <span>Tarea React</span>
        </header>

        <main className="pagina">
          <div className="tarjeta">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/sumadora" element={<Sumadora />} />
              <Route path="/numeros" element={<NumerosALetras />} />
              <Route path="/tabla" element={<TablaMultiplicar />} />
              <Route path="/experiencia" element={<Experiencia />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}