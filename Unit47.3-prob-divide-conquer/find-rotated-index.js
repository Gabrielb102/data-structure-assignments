function average (r, l) {
    return Math.floor((r + l) / 2);
}

function findRotatedIndex(array, num) {
    
    let sortedArr = array;
    let l = 0;
    let r = array.length - 1;
    let p
    
    if (array.length === 1) {
        return num === array[0] ? 0 : -1;
    }

    if (array[0] > array[array.length -1]) {
        while (l < r) {
            p = average(l,r);
            if (array[p] > array[p + 1]) {
                p++;
                break;
            }
            if (array[p] > array[l]) {
                l = p + 1;
            }
            if (array[p] > array[r]) {
                r = p - 1;
            }
        }
        sortedArr = [...array.slice(p, array.length), ...array.slice(0,p)]
    }

    console.log(sortedArr);

    while (l <= r) {
        let m = average(r,l);
        if (sortedArr[m] === num) {
            return m;
        } else if (sortedArr[m] > num) {
            r = m - 1;
        } else if (sortedArr[m] < num) {
            l = m + 1;
        }
        return -1;
    }

    return -1;
}

module.exports = findRotatedIndex