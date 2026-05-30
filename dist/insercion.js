export function insercion(A) {
    const n = A.length;
    for (let i = 1; i < n; i++) {
        const key = A[i];
        let j = i - 1;
        // Mover los elementos A[0..i-1] que sean mayores que key una posición adelante
        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = key;
    }
    return A;
}
