function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);


    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([105, 79, 100, 110]));