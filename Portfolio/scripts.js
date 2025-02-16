// document.addEventListener('DOMContentLoaded', function() {
//     const themeButton = document.createElement('button');
//     themeButton.textContent = 'Change Theme';
//     themeButton.style.position = 'fixed';
//     themeButton.style.bottom = '20px';
//     themeButton.style.right = '20px';
//     themeButton.style.padding = '10px';
//     themeButton.style.backgroundColor = '#333';
//     themeButton.style.color = '#fff';
//     themeButton.style.border = 'none';
//     themeButton.style.borderRadius = '5px';
//     themeButton.style.cursor = 'pointer';

//     document.body.appendChild(themeButton);

//     themeButton.addEventListener('click', function() {
//         const body = document.body;
//         const html = document.documentElement;
//         const currentBgColor = window.getComputedStyle(body).backgroundColor;
//         const newBgColor = currentBgColor === 'rgb(214, 209, 209)' ? '#333' : '#d6d1d1';
//         const newTextColor = currentBgColor === 'rgb(214, 209, 209)' ? '#fff' : '#333';

//         body.style.backgroundColor = newBgColor;
//         body.style.color = newTextColor;
//         html.style.backgroundColor = newBgColor;
//         html.style.color = newTextColor;

//         const elements = document.querySelectorAll('nav, nav a, main, footer, .carousel div');
//         elements.forEach(element => {
//             element.style.color = newTextColor;
//         });
//     });
// });
