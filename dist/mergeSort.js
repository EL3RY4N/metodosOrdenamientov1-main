export function mergeSort(A) {
    /**
     * Ordena el arreglo `A` en orden ascendente usando Merge Sort.
     * La implementación divide y vencerás: divide el arreglo en mitades,
     * ordena recursivamente cada mitad y luego las fusiona.
     * Resultado: escribe el arreglo ordenado en la misma referencia `A` y lo retorna.
     */
    if (A.length <= 1)
        return A; // caso base: 0 o 1 elemento ya está ordenado
    /**
     * Fusiona dos subarreglos ya ordenados `left` y `right` en un nuevo arreglo.
     * Usa comparación `<=` para preservar estabilidad (si hay igualdad, se toma el elemento
     * de la izquierda primero).
     */
    function merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        // Mientras ambos subarreglos tengan elementos, tomar el menor
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]); // tomar de la izquierda si es menor o igual
                i++;
            }
            else {
                result.push(right[j]); // tomar de la derecha si es menor
                j++;
            }
        }
        // Si quedaron elementos en la izquierda, anexarlos
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        // Si quedaron elementos en la derecha, anexarlos
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        return result;
    }
    /**
     * Recursivo: divide el arreglo en mitades hasta llegar a subarreglos de tamaño 1,
     * luego los fusiona utilizando `merge`.
     */
    function mergeRec(arr) {
        if (arr.length <= 1)
            return arr; // subarreglo ya ordenado
        const mid = Math.floor(arr.length / 2);
        const left = mergeRec(arr.slice(0, mid)); // ordenar mitad izquierda
        const right = mergeRec(arr.slice(mid)); // ordenar mitad derecha
        return merge(left, right); // fusionar y devolver arreglo ordenado
    }
    // Obtener arreglo ordenado (nueva referencia) y copiar sus valores en `A`.
    // Hacemos la copia para que la referencia original `A` contenga el resultado.
    const sorted = mergeRec(A);
    for (let i = 0; i < sorted.length; i++) {
        A[i] = sorted[i];
    }
    return A;
}
