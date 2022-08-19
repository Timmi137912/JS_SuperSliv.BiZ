// touchstart

// touchmove

// touchend

// touchenter

// touchleave

// touchcancel


window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.touches[0].target)
    //     console.log(e.target)
    //     console.log(e.changedTouches)
    //     console.log(e.targetTouches)
    // });
    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });
    // box.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('name');

    // let reg = /n/g;

    // console.log(reg.test(ans));

    // // console.log(ans.search(reg));
    // console.log(ans.match(reg));

    // i

    // g

    // m


    // let pass = prompt('passowd');

    // console.log(pass.replace(/./g, "*"));

    // alert('12-34-56'.replace(/-/g, ":"));


    // let ans = prompt('number');

    // let reg = /\d/g;

    // console.log(ans.match(reg));


    let str = 'My name if /R2D2';

    console.log(str.match(/\w\d\w\d/i));
    console.log(str.match(/\//i));

});