import { useState } from 'react'
import Ordenamiento from './Ordenamiento'
import Busqueda from './Busqueda'

function Menu() {
  const [seccion, setSeccion] = useState<string | null>(null)

  if (seccion === 'ordenamiento') return <Ordenamiento onVolver={() => setSeccion(null)} />
  if (seccion === 'busqueda') return <Busqueda onVolver={() => setSeccion(null)} />

  return (
    <>
      <h1>Algoritmos</h1>
      <button onClick={() => setSeccion('ordenamiento')}>Ordenamiento</button>
      <button onClick={() => setSeccion('busqueda')}>Búsqueda</button>
    </>
  )
}

export default Menu