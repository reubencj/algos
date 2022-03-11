// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function push_front(arr, new_value) {
  let new_array = [];
  new_array[0] = new_value;

  for (i = 0; i < arr.length; i++) {
    new_array[i + 1] = arr[i];
  }
  return new_array;
}

// a = [2, 3, 4, 5];
// new_a = 1;
// console.log(push_front(a, new_a));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function pop_front(arr) {
  let return_val = arr[0];

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  return return_val;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insert_at(arr, index, val) {
  for (i = i.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = val;
  return arr;
}

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function remove_at(arr, index) {
  let return_val = arr[index];
  for (i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return return_val;
}

// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swap_pairs(arr) {
  let next_val;
  for (i = 0; i < arr.length - 1; i += 2) {
    next_val = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = next_val;
  }

  return arr;
}

// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function remove_duplicates(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      for (x = i + 1; x < arr.length - 1; x++) {
        arr[x] = arr[x + 1];
      }
      arr.pop();
    }
  }
  return arr;
}
ls = [1, 2, 2, 3, 4, 4];

console.log(remove_duplicates(ls));
