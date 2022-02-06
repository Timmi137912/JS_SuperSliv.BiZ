'use strict'

// if (1 * 4 == 8) {
//     console.log("верно")
// } else {
//     console.log("no")
// }

let num = 50;

if (num < 49) {
    console.log("no")
} else if (num > 100) {
    console.log("many")
} else {
    console.log("yes")
}

(num == 50) ? console.log("yes"): console.log("no");

switch (num) {
    case num < 49:
        console.log("верно");
        break;
    case num > 100:
        console.log("many");
        break;
    case num > 80:
        console.log("so many");
        break;
    case 50:
        console.log("yes");
        break;
    default:
        console.log("WTF");
        break;
}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}