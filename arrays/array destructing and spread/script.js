// const [x, y] = [1, 2]

// console.log(x, y)

// const [x, x2, ...y] = [1, 2, 3, 4]

// console.log(x, x2, y)

// const x = [1, 2, 3, 4]
// const y = x

// y.push("hello")

// console.log(x, y)

const x = [1, 2, 3, 4]
const y = [...x]

y.push("hello")

console.log(x, y)