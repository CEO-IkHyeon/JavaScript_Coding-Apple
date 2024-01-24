var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
// var divLength = document.querySelectorAll('.tab-button').length;
var divLength = $('.tab-button').length;
console.log(divLength);
// tabButton[0].addEventListener('click', function() {
//     // 한번에 모든 tab-button에 붙은 orange class와 모든 tab-content에 붙은 show class 제거
//     tabButton.removeClass('orange');
//     tabContent.removeClass('show');

//     tabButton[0].classList.add('orange');
//     tabContent[0].classList.add('show');
// });

// // $('.tab-button').eq(0).on('click', function() {

// // })

// tabButton[1].addEventListener('click', function() {
//     tabButton.removeClass('orange');
//     tabContent.removeClass('show');

//     tabButton[1].classList.add('orange');
//     tabContent[1].classList.add('show');
// });

// tabButton[2].addEventListener('click', function() {
//     tabButton.removeClass('orange');
//     tabContent.removeClass('show');

//     tabButton[2].classList.add('orange');
//     tabContent[2].classList.add('show');
// });


for (let i = 0; i < divLength; i++) {
    tabButton[i].addEventListener('click', function() {
        tabButton.removeClass('orange');
        tabContent.removeClass('show');
    
        tabButton[i].classList.add('orange');
        tabContent[i].classList.add('show');
    });
}