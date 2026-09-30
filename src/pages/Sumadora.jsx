import { useState } from 'react'

export default function Sumadora() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [resultado, setResultado] = useState(null)

  const sumar = () => {
    setResultado(Number(a) + Number(b))
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Sumadora</h2>
      <input
        type="number"
        placeholder="Primer número"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <span> + </span>
      <input
        type="number"
        placeholder="Segundo número"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br /><br />
      <button onClick={sumar}>Sumar</button>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  )
}