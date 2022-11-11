//first
function extractValue(arr, key) {
    return arr.reduce(function (accum, val) {
        accum.push(val[key]);
        return accum;
    },[]);
}

//second
function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function (accum, val) {
        let lowerCase = val.toLowerCase()
        if (vowels.indexOf(lowerCase) !== -1) {
            if (accum[lowerCase]) {
                accum[lowerCase]++;
            } else {
                accum[lowerCase] = 1;
            }
        }
        return accum;
    }, {});
}

//third
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (accum, nextVal, idx) {
        accum[idx][key] = value;
        return accum;
    }, arr);
}

//fourth
function partition(arr, callback) {
    return arr.reduce(function (accum, nextVal) {
        if (callback(nextVal)) {
            accum[0].push(nextVal);
        } else {
            accum[1].push(nextVal);
        }
        return accum;
    }, [[], []]);
}