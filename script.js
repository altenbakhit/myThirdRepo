'use strict'

// Объявляемы функцию
function guessNumber() {
    // Загадываем число от 1 до 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    return function askNumber() {
        const userNumber = prompt('Угадай число от 1 до 100');

        // Если пользователь нажал "Отмена"
        if (userNumber === null) {
            alert('Игра окончена');
            return;
        }

        // Проверяем, что пользователь ввел число
        if (isNaN(userNumber)) {
            alert('Введи число!');
            return askNumber();
        }

        // Приводим введенное значение к числу
        const guess = Number(userNumber);

        // Сравниваем введенное число с загаданным
        if (guess === secretNumber) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (guess > secretNumber) {
            alert('Загаданное число меньше');
            askNumber();
        } else {
            alert('Загаданное число больше');
            askNumber();
        }
    };
}

// Запускаем игру
guessNumber()();