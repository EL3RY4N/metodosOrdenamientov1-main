export function busquedaBinaria(A: number[], objetivo: number): number {
  let izquierda = 1
  let derecha = A.length - 1

  while (izquierda <= derecha) {
    const medio = Math.floor((izquierda + derecha) / 2)

    if (A[medio] === objetivo) {
      return medio
    }

    if (A[medio] < objetivo) {
      izquierda = medio + 1
    } else {
      derecha = medio - 1
    }
  }

  return -1
}
