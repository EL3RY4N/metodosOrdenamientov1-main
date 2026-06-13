import { useState } from 'react'
import Ordenamiento from './Ordenamiento'
import Busqueda from './Busqueda'

function Menu() {
  const [seccion, setSeccion] = useState<string | null>(null)

  if (seccion === 'ordenamiento') return <Ordenamiento onVolver={() => setSeccion(null)} />
  if (seccion === 'busqueda') return <Busqueda onVolver={() => setSeccion(null)} />

  return (
    <main className="screen">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">INTERFAZ FUTURISTA</p>
          <h1>Algoritmos visuales</h1>
          <p className="subtitle">Explora ordenamientos y búsquedas con estilo moderno y claro.</p>
        </div>

        <div className="button-grid">
          <button className="neon-button" onClick={() => setSeccion('ordenamiento')}>
            <span className="button-icon">⚡</span>
            Ordenamiento
          </button>
          <button className="neon-button" onClick={() => setSeccion('busqueda')}>
            <span className="button-icon">🔍</span>
            Búsqueda
          </button>
        </div>
      </section>
    </main>
  )
}

export default Menu