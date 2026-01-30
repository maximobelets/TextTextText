'use strict'

const text = document.querySelector('.text');

const typeWriter = (string, speed) => {
    for(let i = 0; i < string.length; i++ ) {
        setTimeout((i) => {
            text.innerHTML += string[i];
        }, i * (speed * 1000), i)
    }
};

typeWriter('text', 1);







