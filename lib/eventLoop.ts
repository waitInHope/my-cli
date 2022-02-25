
// timer阶段和check阶段
// setTimeout(() => {
//     console.log('setTimeout')
// }, 1);

// setImmediate(() => {
//     console.log('setImmediate')
// })

// let start: number = Date.now();
// while(Date.now() - start < 10) {}

// timer阶段 I/O阶段 check阶段
// import fs from 'fs'
// fs.readFile('../package.json', () => {
//     setTimeout(() => {
//         console.log('setTimeout')
//     }, 1);

//     setImmediate(() => {
//         console.log('setImmediate')
//     })
// })

setTimeout(() => {console.log(1)}, 1)
setTimeout(() => {console.log(0)}, 0)