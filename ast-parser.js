//1.sourceType module  script  -> import
//2.location  纪录源代码的行数
const acorn = require("acorn");
// const result = acorn.parse(1 + 1", {
    //参数
// }

const walk = require("acorn-walk");
walk.simple(acorn.parse("let x = 10"),{
    Literal(node){
        console.log(`Found a literal:${node.value}`)
    }
})
// console.log(result);