export function busquedaLineal(A: number[], objetivo: number): number {
  for (let i = 1; i < A.length; i++) {
    if (A[i] === objetivo) {
      return i + 1
    }
  }

  return -1
}
