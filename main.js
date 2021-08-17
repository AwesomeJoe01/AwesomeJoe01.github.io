let home = document.getElementById('index');
let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('javascript');
let elements = [home, html, css, js];

let changeBackgroundColor = function(event) {
    switch (event.currentTarget) {
        case home:
            home.style.backgroundColor = 'rgb(20,20,20)';
            break;
        case html:
            html.style.backgroundColor = 'rgb(228, 77, 38)';
            break;
        case css:
            css.style.backgroundColor = 'rgb(38, 77, 228)';
            break;
        case js:
            js.style.backgroundColor = 'rgb(239, 199, 37)';
            break;
    }
}
let resetBackgroundColor = function(event) {
    event.currentTarget.style.backgroundColor = '';
}

for (let i in elements) {
    elements[i].addEventListener('mouseover', changeBackgroundColor);
    elements[i].addEventListener('mouseout', resetBackgroundColor);
}