export function busquedaBinaria(A: number[], objetivo: number): number {
  // Inicializa los límites del intervalo de búsqueda.
  // 'izquierda' apunta al inicio del rango, 'derecha' al final.
  let izquierda = 0
  let derecha = A.length - 1

  // Repite mientras el rango sea válido.
  while (izquierda <= derecha) {
    // Calcula el índice del elemento medio del rango actual.
    const medio = Math.floor((izquierda + derecha) / 2)

    // Si el valor medio es el objetivo, devuelve su posición en base 1.
    if (A[medio] === objetivo) {
      return medio + 1
    }

    // Si el objetivo es mayor que el valor medio,
    // descarta la mitad izquierda del rango.
    if (A[medio] < objetivo) {
      izquierda = medio + 1
    } else {
      // Si el objetivo es menor que el valor medio,
      // descarta la mitad derecha del rango.
      derecha = medio - 1
    }
  }

  // Si no se encuentra el objetivo, devuelve -1.
  return -1
}
