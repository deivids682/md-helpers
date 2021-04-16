
export function fill(arraySize, value) {
  return new Array(arraySize).fill(value);
}

export function reverse(array) {
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i -= 1) {
        reversed.push(array[i]);
    }
    return reversed;
}

export function compact(array) {
    return array.filter(x => x);
}

export const arrayFromPairs = (arrry) => 
    arrry.reduce((acc, value) => {
        if(Array.isArray(value)){
            acc[value[0]] = value[1];
        }
        return acc;
    }, {});

