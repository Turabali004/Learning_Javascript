// let arr = [1,3,4,5,4,6,7,8]

// // arr.map((val, index, arr) => {
// //     console.log(val)
// // })


// // const removeDuplicates = (arr) => [...new Set(arr)];
// // console.log(removeDuplicates);

// // arr.map((val, index) => {
// //     console.log(val);
    
// // })

// arr.push(9)  
// let valueOfArrarr = arr.forEach(item => {
//     // console.log(item + 1)
// }
// );

// // console.log(valueOfArrarr);


// let user = {
//     name: "John",
//     age: 25,
//     city: "New York"
//   };

  
// //   for(let key in user ){
// //     console.log(user[key])
// //   }
//   for(let key of user ){
//     console.log(key)
//   }


// var longestCommonPrefix = function(strs) {
//   let value = "";
  // strs.map(str => {
  //   // convert string -> array of chars
  //   Array.from(str).reduce((acc, char, index) => {
  //     // console.log(index, char);
  //     return char; // yaha tum logic laga sakte ho
  //   }, "");
  // });
//   let prefix = strs[0]
//   for(let i = 0; i < strs.length; i++){
//     console.log( strs[i].indexOf(prefix))
//   }
// };

// let prefixValue = ["flower", "flow", "flight"];
// longestCommonPrefix(prefixValue);

// var val = 100;
// const func1 = () => {
//   console.log("val:::", val)
//   let a = 10;
//   var b = 20;
//   const c = 30;
//   if(true){
//     let d = 40;
//     var e = 50;
//     const f = 60;
//   }

//   console.log("e:", e);
//   // console.log("d:", d);
  

// }

// func1()


// function scopeTest() {
//   var x = 1;
//   let y = 2;
//   const z = 3;

//   {
//     var x = 10;
//     let y = 20;
//     const z = 30;
//     console.log(x, y, z);
//   }

//   console.log(x, y, z);
// }
// scopeTest();



// console.log(a);
// var a = 5;

// // console.log(b);
// // let b = 10;

// function sayHi() {
//   console.log("Hello");
// }
// sayHi();


// const user = {
//   val12: {name: "Ali"},
//   greet() {
//     console.log("Hello " + this.val12.name);
//   },
//   arrowGreet: () => {
//     console.log("Hi " + this.val12.name);
//   }
// };

// user.greet();
// user.arrowGreet();


const createCounter = () => {
  let value = 0;
   return {
    increment: function() {
      value++;
    },
    getCount: function() {
      return value;
    }
  };

}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.getCount());

// console.log(counter.increment());