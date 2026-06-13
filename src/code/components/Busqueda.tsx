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
    const arreglo = input
      .split(/[\s,]+/)
      .map((valor) => valor.trim())
      .filter((valor) => valor !== '')
      .map(Number)
    const objetivo = Number(target)

    if (arreglo.length === 0 || input.trim() === '') {
      setError('Ingresa un arreglo de números separados por comas o espacios.')
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
      const conIndices = arreglo
        .map((valor, indiceOriginal) => ({ valor, indiceOriginal }))
        .sort((a, b) => a.valor - b.valor)
      const valoresOrdenados = conIndices.map((item) => item.valor)
      const posicionOrdenada = busquedaBinaria(valoresOrdenados, objetivo)

      if (posicionOrdenada !== -1) {
        indice = conIndices[posicionOrdenada - 1].indiceOriginal + 1
      }
    } else if (metodo === 'Búsqueda Lineal') {
      indice = busquedaLineal(arreglo, objetivo)
    }

    setResultado(indice)
  }

  return (
    <main className="screen">
      <section className="card">
        <div className="card-header">
          <div className="section-title">
            <span className="section-icon">🔎</span>
            <h2>Búsqueda</h2>
          </div>
          <p className="subtitle">Elige un método y busca tu número rápidamente.</p>
        </div>

        <div className="button-row">
          <button className="neon-button" onClick={() => setMetodo('Búsqueda Lineal')}>
            <span className="button-icon">📍</span>
            Búsqueda Lineal
          </button>
          <button className="neon-button" onClick={() => setMetodo('Búsqueda Binaria')}>
            <span className="button-icon">🧭</span>
            Búsqueda Binaria
          </button>
        </div>

        {metodo && (
          <div className="form-grid">
            <h3>{metodo}</h3>
            <input
              className="input-field"
              type="text"
              placeholder="Ej: 12, 23, 34, 223, 53, 21"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Número a buscar"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <button className="neon-button" onClick={buscar}>
              <span className="button-icon">🚀</span>
              Buscar
            </button>
          </div>
        )}

        {error && <p className="status error">{error}</p>}
        {resultado !== null && resultado >= 0 && <p className="status success">Posición encontrada: {resultado}</p>}
        {resultado !== null && resultado === -1 && <p className="status error">Elemento no encontrado</p>}

        <button className="ghost-button" onClick={onVolver}>
          ← Volver
        </button>
      </section>
    </main>
  )
}

export default Busqueda