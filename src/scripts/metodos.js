array = [1, 2, 33, 3, 4, 5]
array2 = []



console.log(''); console.log('------------ Método MAP'); console.log('');

console.table(array.map(minhaCallBackMap));

function meuMap(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const valorAtt = array[i]
        callback(valorAtt, i, array)
    }
    return array2
}
function minhaCallBackMap(element, index, array) {
    return array2[index] = `Número ${element} na posição: ${index}, veio desse array: ${array}`;
}

console.table(meuMap(array, minhaCallBackMap));


; console.log(''); console.log('------------ Método Filter');; console.log('');
console.table(array.filter((elemento) => elemento % 2 == 0))

function minhaFiltrada(arrayX, callback) {
    let arrayY = []
    let arrayXY = []
    for (let i = 0; i < arrayX.length; i++) {
        arrayY.push(callback(arrayX[i], i, arrayX))
    }
    for (let i = 0; i < arrayY.length; i++) {
        if (arrayY[i] != undefined) {
            arrayXY.push(arrayY[i])
        }
    }
    return arrayXY
}

function callbackFiltro(elemento, index, array) {
    if (elemento % 2 == 0) {
        return elemento
    }
}

console.table(minhaFiltrada(array, callbackFiltro))


    ; console.log(''); console.log('------------ Método Reduce');; console.log('');

console.log(array.reduce((controle, valorAtual) =>
    controle + valorAtual, 13))


function minhaReduce(arrayX, callback, valorInicial) {
    for (let i = 0; i < arrayX.length; i++) {
        valorInicial = callback(valorInicial, arrayX[i])
    }
    return valorInicial
}

function callbackReduce(acumulador, valorAtual) {
    return acumulador + valorAtual
}

console.log(minhaReduce(array, callbackReduce, 13));


; console.log(''); console.log('------------ Método Find');; console.log('');

console.table(array.find(elemento => elemento % 2 == 0))

function meuFind(arrayX, callback) {
    for (let i = 0; i < arrayX.length; i++) {
        if (callback(arrayX[i], i, arrayX) != undefined) {
            return callback(arrayX[i], i, arrayX)
        }
    }
}

function callbackFind(elemento, index, array) {
    if (elemento % 2 == 0) {
        return elemento
    }
}
console.log(meuFind(array, callbackFind))


    ; console.log(''); console.log('------------ Método Includes');; console.log('');
console.log(array.includes(2))

function meuIncludes2(arrayX, valorBuscado) {
    for (let i = 0; i < arrayX.length; i++) {
        if (arrayX[i] == valorBuscado.toString()) {
            return true
        }
    }
    return false
}

function callbackIncludes(elemento, index, array) {
    if (elemento == '3') {
        return true
    }
}
console.log(meuIncludes2(array, 2));



; console.log(''); console.log('------------ Método indexOf');; console.log('');
console.log(array.indexOf(3));

function meuIndexOf(arrayX, callback) {
    for (let i = 0; i < arrayX.length; i++) {
        if (callback(arrayX[i], i, arrayX) != undefined) {
            return callback(arrayX[i], i, arrayX)
        }
    }
}
function callbackIndex(elemento, index, array) {
    if (elemento == 3) {
        return index
    }
}
console.log(meuIndexOf(array, callbackIndex));




