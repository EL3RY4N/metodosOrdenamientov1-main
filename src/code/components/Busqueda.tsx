function Busqueda({ onVolver }: { onVolver: () => void }) {
  return (
    <>
      <h2>Búsqueda</h2>
      <button onClick={onVolver}>← Volver</button>
    </>
  )
}

export default Busqueda