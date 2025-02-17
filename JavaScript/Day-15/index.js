// 1. binary target

var arr = [1, 2, 3, 4, 5, 6];

var target = 7;

function binaryTarget(arrayNum, target) {
  let start = 0;
  let end = arrayNum.length - 1;

  while (start <= end) {
    let midIdx = Math.floor(start + end / 2);
    let midEle = arrayNum[midIdx];

    if (target == midEle) {
      console.log("element found");
      break;
    } else if (target < midEle) {
      end = midIdx - 1;
    } else {
      start = midIdx + 1;
    }
  }
  console.log("not found");
}

binaryTarget(arr, target);
