// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     continue
// }

//loop for array

// const arr = [1, 2 , 3]

// for (let i = 0; i < arr.length; i++) {
//     console.log (arr [i])
// }

// const arr = [4 , 5 , 6]

// for (let value of arr) {
//     console.log (value)
// }

// const arr = "hello"

// for (let value of arr) {
//     console.log (value)
// }

const arr = [1 , 2 , 3 , 4]

for (let [i , value] of arr.entries()) {
    console.log (i , value)
}
