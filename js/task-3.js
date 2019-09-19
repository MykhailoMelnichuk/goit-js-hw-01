const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const inputPassword = prompt('Введите пароль.') 

if (inputPassword === null) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === inputPassword) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert (message);