import { useState } from 'react'
import { busquedaBinaria } from '../busqueda/busquedaBinaria'
import { busquedaLineal } from '../busqueda/busquedaLineal'

function Busqueda({ onVolver }: { onVolver: () => void }) {
  const [metodo, setMetodo] = useState<string | null>(null)
  const [input, setInput] = useState<string>('')
  const [target, setTarget] = useState<string>('')
  const [resultado, setResultado] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  function buscar() {
    const arreglo = input.split(',').map(Number)
    const objetivo = Number(target)

    if (arreglo.length === 0 || input.trim() === '') {
      setError('Ingresa un arreglo de números separados por comas.')
      setResultado(null)
      return
    }

    if (arreglo.some((n) => Number.isNaN(n))) {
      setError('El arreglo solo debe contener números.')
      setResultado(null)
      return
    }

    if (Number.isNaN(objetivo)) {
      setError('Ingresa el número a buscar.')
      setResultado(null)
      return
    }

    setError(null)
    let indice = -1

    if (metodo === 'Búsqueda Binaria') {
      const ordenado = [...arreglo].sort((a, b) => a - b)
      indice = busquedaBinaria(ordenado, objetivo)
    } else if (metodo === 'Búsqueda Lineal') {
      indice = busquedaLineal(arreglo, objetivo)
    }

    setResultado(indice)
  }

  return (
    <>
      <h2>Búsqueda</h2>

      <div>
        <button onClick={() => setMetodo('Búsqueda Lineal')}>Búsqueda Lineal</button>
        <button onClick={() => setMetodo('Búsqueda Binaria')}>Búsqueda Binaria</button>
      </div>

      {metodo && (
        <>
          <h3>{metodo}</h3>
          <input
            type="text"
            placeholder="Ej: 1, 3, 5, 7"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Número a buscar"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
          <button onClick={buscar}>Buscar</button>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {resultado !== null && resultado >= 0 && <p>Posición encontrada: {resultado}</p>}
      {resultado !== null && resultado === -1 && <p>Elemento no encontrado</p>}

      <button onClick={onVolver}>← Volver</button>
    </>
  )
}

export default Busqueda