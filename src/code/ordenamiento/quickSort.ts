export function quickSort(A: number[]): number[] {
  /**
   * Ordena el arreglo A en orden ascendente usando Quick Sort.
   * La función modifica el arreglo original e retorna la referencia ordenada.
   */
  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high]; // pivote elegido: último elemento del subarreglo
    let i = low - 1; // índice del subarreglo menor al pivote

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++; // mover límite de elementos menores
        const temp = arr[i];
        arr[i] = arr[j]; // intercambiar elemento menor hacia la izquierda
        arr[j] = temp; // colocar el valor mayor a la derecha
      }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high]; // colocar el pivote en su posición ordenada
    arr[high] = temp; // intercambiar pivote con el primer elemento mayor
    return i + 1; // devolver nueva posición del pivote
  }

  function quickSortRec(arr: number[], low: number, high: number) {
    if (low < high) {
      const pivotIndex = partition(arr, low, high); // particionar el subarreglo
      quickSortRec(arr, low, pivotIndex - 1); // ordenar izquierda del pivote
      quickSortRec(arr, pivotIndex + 1, high); // ordenar derecha del pivote
    }
  }

  quickSortRec(A, 0, A.length - 1); // iniciar Quick Sort en todo el arreglo
  return A; // retornar arreglo ordenado
}
