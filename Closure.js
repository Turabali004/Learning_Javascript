// function outerFunc() {
//     let count = 0;
//     return function inner(){
//         count++
//         return count
//     }
// }

// let fn = outerFunc()
// console.log(fn())


// function outerFunc(val) {
//     function innerFunc(InnerVal){
//         return InnerVal + val
//     }
//     return innerFunc
// }
// const fn = outerFunc(6)
// console.log(fn(4))


// function outerFunc() {
//     const number = 10;
//     function innerFunc(){
//         console.log(number)
//     }
//     return innerFunc
// }
// const fn = outerFunc()
// fn()
// // console.log(fn())


// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
  // Output: 4, 4, 4 (var issue)
  
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
  // Output: 1, 2, 3 (closure with block scope)
  