export function busquedaLineal(A: number[], objetivo: number): number {
  // Recorre cada elemento del arreglo A desde el primer índice.
  for (let i = 0; i < A.length; i++) {
    // Compara el elemento actual con el valor objetivo.
    if (A[i] === objetivo) {
      // Si lo encuentra, devuelve la posición en base 1.
      return i + 1
    }
  }

  // Si termina el bucle sin encontrarlo, devuelve -1.
  return -1
}
