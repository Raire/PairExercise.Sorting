function bubbleSort(array) {
  let temp;
  let state;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      temp = swap(array[i], array[i + 1]);
      array[i] = temp[0];
      array[i + 1] = temp[1];
      if (temp[2]) {
        state = temp[2];
      }
    }
  }
  if (state) {
    bubbleSort(array);
  }
  return array;
}

function swap(num1, num2) {
  let temp = [num1, num2];
  if (num1 > num2) {
    temp[0] = num2;
    temp[1] = num1;
    temp.push(true);
  }
  return temp;
}