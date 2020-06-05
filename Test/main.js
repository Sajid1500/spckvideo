// function smallestCommons(arr) {
//   var modArr = arr.sort(function (a,b) {
//     return a-b
//   })
//   console.log(modArr);
//   var numArr = [];
//   for (var i = modArr[0]; i < modArr[arr.length-1]; i++) {
//     numArr.push(i)
//   }
// }
// console.log(numArr);

// smallestCommons([9, 5]);

function delayBySeconds(sec) {
  let start = now = Date.now();
  while (now - start < (sec * 1000)) {
    now = Date.now()
    console.log(now-start);
  }
}
delayBySeconds(5)
console.log(303030);