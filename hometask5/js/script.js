let menuLi = document.querySelectorAll('.menu-item'),
    menuUl = document.querySelector('.menu'),
    liNew = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName("adv")[0],
    column = document.querySelectorAll('.column');



//1
//console.log(menuLi);
//console.log(menuUl);

menuUl.insertBefore(menuLi[2], menuLi[1]);

liNew.classList.add('menu-item');
liNew.innerHTML = ('Пятый пункт');
menuUl.append(liNew);
//2
document.body.style.background = "url(../hometask5/img/apple_true.jpg) center no-repeat"
//3
title.innerHTML = ('Мы продаем только подлинную технику Apple');
//4
//console.log(column);
//console.log(adv);

adv.remove();

//5
let prompter = prompt('Оношение к Apple', 'super'),
    promptText = document.querySelector('.prompt');

// console.log(prompter);
// console.log(promptText);

promptText.innerHTML = prompter;