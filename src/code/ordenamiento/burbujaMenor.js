export function burbujaMenor(A) {
    const N = A.length;
    // Recorre el arreglo N-1 veces
    for (let i = 0; i < N - 1; i++) {
        // Compara los numeros y los intercambia si están en el orden incorrecto
        for (let j = 0; j < N - 1 - i; j++) {
            // Ordena de menor a mayor
            if (A[j] > A[j + 1]) {
                // Intercambia los elementos
                const temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
    return A;
}
