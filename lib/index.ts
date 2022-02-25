
import {add, getAppointNumber} from './utils'

// console.log(add(1, 3))

let test1: string = 'I have 1024 money $52';
let test2: string = '3day, 4month';
console.log(getAppointNumber(test2))

console.log(setTimeout(()=>{}, 0) === setTimeout(()=>{}, 1))

process.nextTick(() => {
    
})