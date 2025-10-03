// //

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// let arr2 = arr;

// arr2[2] = "Rohit";

// for (let a in arr) {
//   console.log(arr[a]);
// }

// arr[4] = "Rohit";

// // const arr2 = arr.slice(2, 4);
// console.log(arr.splice(0, 6, "ROhit", "Negi"));

// console.log(arr);

// const arr2 = [1, 2, 3, ...arr];

// console.log(arr2);

// console.log(arr.reverse());
// console.log(arr);

// console.log(arr.toString());

// console.log(arr.join("-12-12-"));

// console.log(arr.indexOf(50));

// const arr = [10, "Ajay", 20, 50, 60, 90];
// console.log(arr.sort());
// console.log(arr);

const a = [10, 20, 300, [10, 20, 30, [40, 50, 60]], 40, 4, 100];

// a.sort((a, b) => a - b);
// 52:38 sec rule and intution behind the sort function

// console.log(a[3][3][2]);

console.log(a.flat(2));
