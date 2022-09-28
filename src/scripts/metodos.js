array = [1,2,33,3,4,5]
array2 = []

function minhaCallBackForEach(element, index, array) {
  return array2[index] = `Número ${element} na posição: ${index}, veio desse array: ${array}`;
}

function meuMetodoforEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        const valorAtt = array[i]
        callback(valorAtt, i, array)
    }
  }

//   meuMetodoforEach(array, minhaCallBackForEach)
//   array.forEach(minhaCallBackForEach)
// console.table(array2)

// ------------ Método MAP
console.table(array.map(minhaCallBackForEach));

function meuMap(array, callback) {
  for(let i = 0; i < array.length; i++){
  const valorAtt = array[i]
  callback(valorAtt, i, array)
  }  
  return array2
}
console.table(meuMap(array, minhaCallBackForEach));


// // ------------Método Filter
console.table(array.filter((elemento) => elemento%2 == 0))
let arrayY = []
function minhaFiltrada(arrayX) {
    arrayY = []
    for (let i = 0; i < arrayX.length; i++) {
        if (arrayX[i]%2 == 0) {
            arrayY.push(arrayX[i])
        }
    }
    return arrayY
}
console.table(minhaFiltrada(array))


//------------Método Reduce
let juntatudo = array.reduce((controle, valorAtual) =>
    controle + valorAtual, 13)
console.log(juntatudo);

function minhaReduce(arrayX) {
    let base = 13
    for (let i = 0; i < arrayX.length; i++) {
        base += arrayX[i]       
    }
    return base
}

console.log(minhaReduce(array));


// ------------Método Find
let find = array.find(elemento => elemento%2 == 0)
console.table(find)
function meuFind(arrayX) {
    for (let i = 0; i < arrayX.length; i++) {
        if (arrayX[i] %2 == 0) {
            return arrayX[i]
        }
    }
}
console.log(meuFind(array))


//------------MetodoIncludes
function seTiver3ComIncludes(arrayX) {
    let result = arrayX.includes(3)    
    return result
}
console.log(seTiver3ComIncludes(array))

function meuIncludes3(arrayX) {
    for (let i = 0; i < arrayX.length; i++) {
        for (let idx = 0; idx < arrayX[i].toString().length; idx++) {
            if (arrayX[i].toString()[idx] == '3') {
                return true
            }
             {
              
            }
        }
        
    }
}
console.log(meuIncludes3(array));



//------------MetodoIndexOf
console.log(array.indexOf(3));
function meuIndexOf(arrayX) {
    for (let i = 0; i < arrayX.length; i++) {
        if (arrayX[i] == 3) {
            return i
        } 
    }
}
console.log(meuIndexOf(array));


