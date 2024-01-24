var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
var divLength = $('.tab-button').length;

// for (let i = 0; i < divLength; i++) {
//     tabButton[i].addEventListener('click', function() {
//         openTab(i);
//     });
// }

// 이렇게 상위 요소에만 이벤트리스너를 붙이고 e.target으로 하위 요소들 감지할 수 있다
// 이러면 이벤트리스너의 수를 줄일 수 있어 RAM 절약 가능

$('.list').click(function(e) {
    openTab(parseInt(e.target.dataset.id));   //tag에 data 넣어놓을 수 있음
});


function openTab(i) {
    tabButton.removeClass('orange');
    tabContent.removeClass('show');

    tabButton[i].classList.add('orange');
    tabContent[i].classList.add('show');
}



