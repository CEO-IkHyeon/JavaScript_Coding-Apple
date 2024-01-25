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


var formSelect = $('.form-select');
formSelect.eq(0).on('input', function() {
    if (this.value == '셔츠') { // this : 현재 이벤트리스너가 달린 곳
        formSelect.eq(1).removeClass('form-hide');
        
        var shirts = `<option>95</option>
        <option>100</option>`;
        formSelect.eq(1).html(shirts);

    } else if (this.value == '바지') {
        formSelect.eq(1).removeClass('form-hide');

        var pants = `<option>28</option>
        <option>30</option>`;
        formSelect.eq(1).html(pants);

    } else {
        formSelect.eq(1).addClass('form-hide');
    }
});





