function flattenobj(obj) {
    let res = {};
    for (let i in obj) {
        if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
            // Correct recursive call to flattenobj for nested objects
            let temp = flattenobj(obj[i]);
            for (let j in temp) {
                res[i + '.' + j] = temp[j];
            }
        } else {
            res[i] = obj[i];
        }
    }
    return res;
}

function flattenarray(arr) {
    let result = {};
    for (let obj of arr) {
        // Call flattenobj for each object in the array
        Object.assign(result, flattenobj(obj));
    }
    return result;
}

let input = [{a: 1}, {b: 2}, {c: {d: {f: 3}}}, {g: {h: 4}}, {i: 5}];
console.log(flattenarray(input));
