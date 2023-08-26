//Crear una función que tome dos parámetros (num, length), y retorne un array con los números que son múltiplos del número ingresado por el usuario hasta que el array alcance la longitud total (parámetro length).

// Función para calcular los múltiplos de un número hasta alcanzar una longitud dada
function calcularArray(num, length) {

    // Pedirle al usuario que ingrese numeros positivos
    if (num <= 0 || length <= 0) {
      console.error('Los parámetros deben ser números positivos');
      // Devolver un array vacío si los parámetros no son válidos
      return []; 
    }
  
    const array = [];
    let counter = 1;
  
    // Encontrar multiplos hasta alcanzar la longitud deseada
    while (array.length < length) {
      if (counter % num === 0) {
        
        // Agregar el múltiplo al array
        array.push(counter); 
      }
      counter++;
    }
  
    return array;
} 

// Obtener el número y la longitud deseada del usuario
const number = parseInt(prompt('Ingresa un número:'));
const longitud = parseInt(prompt('Ingrese la longitud deseada:'));
  
// Verificar si las entradas son números válidos
if (isNaN(number) || isNaN(longitud)) {

    console.error('Ingrese valores numéricos válidos');

} else {
    // Calcular y mostrar los múltiplos solo si las entradas son válidas
    const resultado = calcularArray(number, longitud);

    console.log('Array de múltiplos: ', resultado);
}