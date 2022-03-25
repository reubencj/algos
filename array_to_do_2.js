// Reverse

const replace = (arr) => {
  if (arr.length % 2 == 0) {
    for (let i = 0; i <= arr.length / 2; i++) {
      let r = arr[i];
      arr[i] = arr[arr.length - (i + 1)];
      arr[arr.length - (i + 1)] = r;
    }
  } else {
    for (let i = 0; i <= (arr.length - 1) / 2; i++) {
      let r = arr[i];
      arr[i] = arr[arr.length - (i + 1)];
      arr[arr.length - (i + 1)] = r;
    }
  }

  return arr;
};

//rotate

const rotate = (arr, shiftby) => {
  for (let counter = 1; counter <= shiftby; i++) {
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i + 1];
    }
  }
};

//Filter Range

const filter_range = (arr, min, max) => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      new_arr.push(arr[i]);
    }
  }

  arr = new_arr;

  return arr;
};

//concat arrays

const arrConcat = (arrOne, arrTwo) => {
  let index = 0;
  let new_arr = [];
  for (let i = 0; i < arrOne.length; i++) {
    new_arr[index] = arrOne[i];
    index++;
  }
  for (let i = 0; i < arrTwo.length; i++) {
    new_arr[index] = arrTwo[i];
    index++;
  }
  return new_arr;
};

let a = [1, 2, 3, 4];
let b = ["a", "b"];
console.log(arrConcat(a, b));
