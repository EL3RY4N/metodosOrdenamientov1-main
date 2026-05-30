export function quickSort(A: number[]): number[] {
<<<<<<< HEAD
  function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }

    const temp = arr[i + 1]
    arr[i + 1] = arr[high]
    arr[high] = temp
    return i + 1
  }

  function quickSortRecursive(arr: number[], low: number, high: number): void {
    if (low < high) {
      const pivotIndex = partition(arr, low, high)
      quickSortRecursive(arr, low, pivotIndex - 1)
      quickSortRecursive(arr, pivotIndex + 1, high)
    }
  }

  quickSortRecursive(A, 0, A.length - 1)
  return A
=======
  return A;
>>>>>>> e24badf7c65fbc78b751449811a27720ba0f1fd5
}
