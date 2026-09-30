import { useState } from 'react'

export default function TablaMultiplicar() {
  const [numero, setNumero] = useState('')
  const [tabla, setTabla] = useState([])

  const generar = () => {
    const n = Number(numero)
    const filas = []
    for (let i = 1; i <= 13; i++) {
      filas.push(`${n} x ${i} = ${n * i}`)
    }
    setTabla(filas)
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Tabla de multiplicar</h2>
      <input
        type="number"
        placeholder="Escribe un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && generar()}
      />
      <button onClick={generar} style={{ marginLeft: '8px' }}>Mostrar</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tabla.map((fila, i) => (
          <li key={i}>{fila}</li>
        ))}
      </ul>
    </div>
  )
}