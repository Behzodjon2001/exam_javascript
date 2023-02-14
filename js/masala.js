//**1 - masala */
let str = "Najot talim";

function strLength(str) {
    return str.length;
}

// console.log(strLength(str));

//**2 - masala */
let talaba = 2000;

function talabalar(talaba) {
    let xorijlikTalaba = talaba / 5;
    let bitiruvchiXorijlik = xorijlikTalaba / 5;
    return bitiruvchiXorijlik
}

// console.log(talabalar(talaba));

//**3 - masala */

let str3 = "WSDVnSCSaVbMjoCtYSCVABCVDSKS";

function to1LowerCase(str3) {
    let res = "";
    for (let i = 0; i < str3.length; i++) {
        if (str3[i] == str3[i].toLowerCase()) {
            res += str3[i];
        }
    }
    return res;
}

// console.log(to1LowerCase(str3));

//**4 - masala */
let a = 45.2
let b = 34
let c = 64.3

function checkNumber(a, b, c) {
    if ((a - Math.floor(a) === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
    if ((b - Math.floor(b) === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
    if ((c - Math.floor(c) === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// checkNumber(a, b, c);

function maxValue(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

// console.log(maxValue(23, 43, 12));