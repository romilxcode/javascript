// const myPromise = new Promise ((resolve, reject) => {
//     // Asynchronous operation

//     if (true) {
//         resolve ("good"); //fulfill the promise
//     } else {
//         reject ("bad"); // Reject the promise
//     }
// });

// myPromise.then((value) => {
//     console.log(value)
// }).catch((value) => {
//     console.log(value)
// })

// const myPromise = new Promise ((resolve, reject) => {
//     // Asynchronous operation

//     if (false) {
//         resolve ("good"); //fulfill the promise
//     } else {
//         reject ("bad"); // Reject the promise
//     }
// });

// myPromise.then ((value) => {
//     console.log (value)
// }).catch ((value) => {
//     console.log (value)
// }).finally (() => {
//     console.log ("always")
// })

const promise1 = Promise.resolve(3);
const promise2 = new Promise ((resolve, reject) => setTimeout(resolve, 100, "foo"));
const promise3 = new Promise ((resolve , reject) => setTimeout(reject , 500 , "bar"));

Promise.all([promise1 , promise2 , promise3 ])
    .then((results) => {
        console.log(results); // This will not run due to promise of rejecting
})

.catch((error) => {
    console.error(error); // "bar"
});