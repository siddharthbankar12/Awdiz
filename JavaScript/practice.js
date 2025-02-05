const sortedArray = (array) => {
  let empty = [];

  for (let i = 0; i < array.length; i++) {
    var checkCondition = false;

    for (let j = 0; j < empty.length; j++) {
      if (array[i] > empty[j]) {
        empty.splice(j, 0, array[i]);
        checkCondition = true;
        break;
      } else if (array[i] === empty[j]) {
        checkCondition = true;
        break;
      }
    }

    if (!checkCondition) {
      empty.push(array[i]);
    }
  }

  return empty;
};

console.log(sortedArray([5, 6, 2, 6, 7, 8, 9, 1, 3, 55]));
