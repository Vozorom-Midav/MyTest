let el_1 = document.querySelector('.a'), el_2 = document.querySelector('.b');
let button_m = document.querySelector('.button');
button_m.onclick = function Multi(a, b) {
    a = el_1.textContent;
    b = el_2.textContent;
    console.log(a*b);
}