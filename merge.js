function merge(leftArr, rightArr) {
  const sortedArray = [];
  const left = leftArr.slice(0);
  const right = rightArr.slice(0);
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// function mergeSort2(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge2(mergeSort2(left), mergeSort2(right));
// }

// function merge2(left, right) {
//   const output = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     let leftElement = left[leftIndex];
//     let rightElement = right[rightIndex];

//     if (leftElement < rightElement) {
//       output.push(leftElement);
//       leftIndex++;
//     } else {
//       output.push(rightElement);
//       rightIndex++;
//     }
//   }
//   return [...output, ...left, ...right];
// }

module.exports = { merge, mergeSort };
