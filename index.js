function map(array, callback) {
    let UpdatedNumbers = [];

    for (let i = 0; i < array.length; i++) {
      const theElement = array[i];
      UpdatedNumbers.push(callback(theElement));
    }
    return UpdatedNumbers;
}

function reduce(array, callback, startingPoint) {

    let i = 0 
    if (startingPoint === undefined) {
        startingPoint = array[0]
        i = 1
    }

    let value = startingPoint

    for (i; i < array.length; i++) {
        value = callback(array[i], value)
    }
    return value
}