import { useState } from 'react'

import { burbujaMenor } from '../ordenamiento/burbujaMenor'
import { burbujaMayor } from '../ordenamiento/burbujaMayor'
import { seleccion } from '../ordenamiento/seleccion'
import { insercion } from '../ordenamiento/insercion'
import { quickSort } from '../ordenamiento/quickSort'
import { mergeSort } from '../ordenamiento/mergeSort'

function Ordenamiento({ onVolver }: { onVolver: () => void }) {
  const [metodo, setMetodo] = useState<string | null>(null)
  const [input, setInput] = useState<string>("")
  const [resultado, setResultado] = useState<number[]>([])

function ordenar() {
  const arreglo = input
    .split(/[\s,]+/)
    .map((valor) => valor.trim())
    .filter((valor) => valor !== '')
    .map(Number)

  if (metodo === "Burbuja Menor") setResultado(burbujaMenor(arreglo))
  if (metodo === "Burbuja Mayor") setResultado(burbujaMayor(arreglo))
  if (metodo === "Selección")     setResultado(seleccion(arreglo))
  if (metodo === "Inserción")     setResultado(insercion(arreglo))
  if (metodo === "Quick Sort")    setResultado(quickSort(arreglo))
  if (metodo === "Merge Sort")    setResultado(mergeSort(arreglo))
}

  const metodos = [
    "Burbuja Menor",
    "Burbuja Mayor",
    "Selección",
    "Inserción",
    "Quick Sort",
    "Merge Sort"
  ]

  return (
    <main className="screen">
      <section className="card">
        <div className="card-header">
          <h2>Ordenamiento</h2>
          <p className="subtitle">Selecciona un algoritmo y ordena tu arreglo con estilo.</p>
        </div>

        <div className="button-row">
          {metodos.map((m) => (
            <button key={m} className="neon-button" onClick={() => setMetodo(m)}>
              <span className="button-icon">⚙️</span>
              {m}
            </button>
          ))}
        </div>

        {metodo && (
          <div className="form-grid">
            <h3>{metodo}</h3>
            <input
              className="input-field"
              type="text"
              placeholder="Ej: 5, 3, 8, 1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="neon-button" onClick={ordenar}>
              <span className="button-icon">🔁</span>
              Ordenar
            </button>
          </div>
        )}

        {resultado.length > 0 && (
          <p className="status success">Resultado: {resultado.join(', ')}</p>
        )}

        <button className="ghost-button" onClick={onVolver}>
          Volver
        </button>
      </section>
    </main>
  )
}

export default Ordenamiento