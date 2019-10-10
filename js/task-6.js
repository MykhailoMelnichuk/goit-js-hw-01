let input = 0;
let total = 0;
while (input !== null) {
    input = Number(input);
    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз.')
        input = 0;
    };
    total = total + input;
    input = prompt('Введите число:');
}
alert(`Общая сумма чисел равна ${total}.`)