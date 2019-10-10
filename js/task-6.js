let input =0;
let total = 0;
let proverka;

while (input !== null) {
    console.log(input);
    input = Number(input);
    console.log(input);
    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз.')
        input = 0;
    };
    total = total + input;
    console.log(total);
    input = prompt('Введите число:');
}
alert(`Общая сумма чисел равна ${total}.`)