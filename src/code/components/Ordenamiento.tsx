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
  const arreglo = input.split(",").map(Number)

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
    <>
      <h2>ordenamiento</h2>
      {metodos.map((m) => (
        <button key={m} onClick={() => setMetodo(m)}>
          {m}
        </button>
      ))}

      {metodo && (
        <>
          <h3>{metodo}</h3>
          <input
            type="text"
            placeholder="Ej: 5, 3, 8, 1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={ordenar}>Ordenar</button>
        </>
      )}

      {resultado.length > 0 && (
        <p>Resultado: {resultado.join(", ")}</p>
      )}

      <button onClick={onVolver}>Volver</button>
    </>
  )
}

export default Ordenamiento