import { useState } from 'react'

const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']

const especiales = [
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
  'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés',
  'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'
]

const decenas = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']

const centenas = [
  '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
  'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
]

function menorDe100(n) {
  if (n < 10) return unidades[n]
  if (n < 30) return especiales[n - 10]
  const d = Math.floor(n / 10)
  const u = n % 10
  return u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`
}

function convertir(n) {
  if (n === 1000) return 'mil'
  if (n === 100) return 'cien'
  const c = Math.floor(n / 100)
  const resto = n % 100
  const partes = []
  if (c > 0) partes.push(centenas[c])
  if (resto > 0) partes.push(menorDe100(resto))
  return partes.join(' ')
}

export default function NumerosALetras() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState('')

  const traducir = () => {
    const n = Number(numero)
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
      setResultado('Escribe un número entero del 1 al 1000')
      return
    }
    setResultado(convertir(n))
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Números a letras</h2>
      <input
        type="number"
        placeholder="Del 1 al 1000"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && traducir()}
      />
      <button onClick={traducir} style={{ marginLeft: '8px' }}>Traducir</button>
      {resultado && <h3>{resultado}</h3>}
    </div>
  )
}