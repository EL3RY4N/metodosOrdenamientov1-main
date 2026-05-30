export function seleccion(A: number[]): number[] {
  const N = A.length

  for (let i = 0; i < N - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < N; j++) {
      if (A[j] < A[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      const temp = A[i]
      A[i] = A[minIndex]
      A[minIndex] = temp
    }
  }

  return A
}
