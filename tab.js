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


var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];


var formSelect = $('.form-select');
formSelect.eq(0).on('input', function() {
    if (this.value == '셔츠') { // this : 현재 이벤트리스너가 달린 곳
        formSelect.eq(1).removeClass('form-hide');
        formSelect.eq(1).html('');

        shirts.forEach(function(data) {
            formSelect.eq(1).append(`<option>${data}</option>`);
        });
        

    } else if (this.value == '바지') {
        formSelect.eq(1).removeClass('form-hide');

        formSelect.eq(1).html('');
        pants.forEach(function(data, i) {
            formSelect.eq(1).append(`<option>${data}</option>`);
        });

        // arrow function : 함수 안의 this 값이 달라질 수 있음(외부에서 선언한 this를 가져와 사용)
        // pants.forEach((a) => {
        //     formSelect.eq(1).append(`<option>${data}</option>`);
        // })

    } else {
        formSelect.eq(1).addClass('form-hide');
    }
});


var obj = {name: 'kim', age: 20};

for (var key in obj) {
    console.log(key);
    console.log(obj[key]);

}





