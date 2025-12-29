const obj = {
    name : "Romil",
    age : 26,
    sayHello: function() {
        return "hello"
    },
    career: {}
}

// console.log(Object.values(obj))
// console.log(Object.keys(obj))

// for (let key in obj) {
//     console.log(key)
// }

const obj2 = {
    hairColor : "black",
    arr: [1 , 2 , 3],
    name: "Tim"
}

const obj3 = {...obj, ...obj2}
// console.log(obj3)

// obj2.hairColor = "brown"
// obj3.career.info = "tech"
// obj2.arr.push("tech")
// console.log(obj2 , obj3)

const {hairColor , name} = obj3
console.log(hairColor , name)
