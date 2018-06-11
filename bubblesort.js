function bubbleSort(array) {
  var temp;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      temp = swap(array[i], array[i + 1]);
      array[i] = temp[0];
      array[i + 1] = temp[1];
    }
  }
  return array;
}

console.log(bubbleSort([4, 1, 5, 7, 2]));

function swap(num1, num2) {
  let temp = [num1, num2];
  if (num1 > num2) {
    temp[0] = num2;
    temp[1] = num1;
  }
  return temp;
}
