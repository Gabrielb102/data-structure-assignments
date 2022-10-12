function average (r, l) {
    return Math.floor((r + l) / 2);
}

function sortedFrequency(array, target) {
    let r = array.length - 1;
    let l = 0;
    let tr = average(r,l);
    let tl = average(r,l);

    while (array[tl] !== target || array[tl - 1] === target) {

        if (tl === l || tl === r) {
            break
        }

        if (array[tl] < target) {
            if (tl === r - 1) {
                tl ++;
            }
            l = tl;
            tl = average(tl, r)
            continue;
        }

        if (array[tl] >= target) {
            if (tl === l + 1) {
                tl --;
            }
            r = tl;
            tl = average(tl,l);
            continue;
        }        
    }

    r = array.length - 1;
    l = 0;

    while (array[tr] !== target || array[tr + 1] === target) {

        console.log("right is still running, tr: ", tr, "array[tr]: ", array[tr], "target: ", target);

        if (tr === l || tr === r) {
            break
        }

        if (array[tr] <= target) {
            if (tr === r - 1) {
                tr ++;
            }
            tr = average(tr, r)
            continue;
        }

        if (array[tr] > target) {
            tr = average(tr,l);
            continue;
        }        
    }

    if (tr !== target && tl !== target ) {
        return -1;
    }

    console.log("tr:", tr, "tl: ", tl);
    const ts = array.slice(tl, tr + 1);
    console.log("ts: ",ts, "ts.length: ", ts.length);
    return ts.length;
}

module.exports = sortedFrequency