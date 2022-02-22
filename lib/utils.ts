
function add(num1: number, num2: number): number {
    return num1 + num2
}

function getAppointNumber(str: string): number {
    let reg1: RegExp = /\d+(?=month)/;  // 正向先行断言  获取month前面的数字
    let reg2: RegExp = /(?<=\$)\d+/;    // 正向后行断言  获取$后面的数字
    let reg3: RegExp = /\d+(?!month)/;  // 负向先行断言  获取month前面数字之外的其他数字
    let reg4: RegExp = /(?<!\$)\d+/;    // 负向后行断言  获取$后面数字之外的其他数字
    let res: number = Number(str.match(reg1))
    return res;
}

export {
    add,
    getAppointNumber
};