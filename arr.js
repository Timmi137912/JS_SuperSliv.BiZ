/* let arr = [1, 2, 3, 4, 5];
arr[99] = 99;
console.log(arr.length);
console.log(arr);

arr.pop();
arr.push(5);
arr.shift();
arr.unshift(1);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


console.log(arr);

let arr = ["first", 2, 3, "four", 5];

arr.forEach(function (item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ")");
});

let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}; */


/* let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr); */

/* let arr = ["aawe", "sdsds", "sddsd", "ddwd"],
    i = arr.join(', ');

console.log(i); */


/* let arr = ["aawe", "sdsds", "sddsd", "ddwd"],
    i = arr.sort();

console.log(arr); */

/* let arr1 = [1, 15, 4],
    i = arr1.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr1); */

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 199
};


john.__proto__ = soldier;

console.log(john);
console.log(john.armor);