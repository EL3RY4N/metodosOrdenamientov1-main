export function seleccion(A: number[]): number[] {
  const N = A.length;

  // Recorre el arreglo y coloca en cada posición i el elemento menor
  // encontrado en el subarreglo desde i hasta el final.
  for (let i = 0; i < N - 1; i++) {
    let minIndex = i; // índice del elemento más pequeño

    // Buscar el menor elemento en el subarreglo no ordenado
    for (let j = i + 1; j < N; j++) {
      if (A[j] < A[minIndex]) {
        minIndex = j;
      }
    }

    // Si se encontró un elemento menor, intercambiarlo con la posición i
    if (minIndex !== i) {
      const temp = A[i];
      A[i] = A[minIndex];
      A[minIndex] = temp;
    }
  }

  return A;
}
