
document.querySelectorAll('.tab-button')[0].addEventListener('click', function() {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');

    document.querySelectorAll('.tab-button')[0].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.add('show');
});

// $('.tab-button').eq(0).on('click', function() {

// })

document.querySelectorAll('.tab-button')[1].addEventListener('click', function() {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');

    document.querySelectorAll('.tab-button')[1].classList.add('orange');
    document.querySelectorAll('.tab-content')[1].classList.add('show');
});

document.querySelectorAll('.tab-button')[2].addEventListener('click', function() {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');

    document.querySelectorAll('.tab-button')[2].classList.add('orange');
    document.querySelectorAll('.tab-content')[2].classList.add('show');
});