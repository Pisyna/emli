// Функция для генерации случайного цвета
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Обработчик события клика по кнопке
document.getElementById('colorButton').addEventListener('click', function() {
    var button = document.getElementById('colorButton');
    var randomBgColor = randomColor();
    button.style.backgroundColor = randomBgColor;
});
