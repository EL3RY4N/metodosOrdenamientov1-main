// llamamos al type script compilado a javascript
import { burbujaMenor } from './dist/burbujaMenor.js'
import { burbujaMayor } from './dist/burbujaMayor.js'
import { insercion } from './dist/insercion.js'
import { mergeSort } from './dist/mergeSort.js'
//ingresamos un arreglo de ejemplo para ordenar
const ejemplo = [64, 34, 25, 12, 22, 11, 90]
// mostramos el resultado  
console.log('entrada:', ejemplo)
console.log('ordenado Burbuja Menor:', burbujaMenor([...ejemplo]))
console.log('ordenado Burbuja Mayor:', burbujaMayor([...ejemplo]))
console.log('ordenado Inserción:', insercion([...ejemplo]))
console.log('ordenado MergeSort:', mergeSort([...ejemplo]))
