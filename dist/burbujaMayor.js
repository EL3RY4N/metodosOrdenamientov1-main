export function burbujaMayor(A) {
    const n = A.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (A[j] < A[j + 1]) {
                const tmp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return A;
}
