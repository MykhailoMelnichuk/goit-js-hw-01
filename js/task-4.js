const credits = 23580;
const pricePerDroid = 3000;
let message, sumPerDroid, balanceCredits;
let totalPrice = prompt('Введите количество дроидов - которое Вы хотите купить?'); 
if (totalPrice === null) {
    message = 'Отменено пользователем!';
} else {
    totalPrice = Number(totalPrice);
    sumPerDroid = totalPrice * pricePerDroid;
    if (credits < sumPerDroid) {
        message = 'Недостаточно средств на счету!';
     } else {
        balanceCredits = credits - sumPerDroid;
        message = `Вы купили ${totalPrice} дроидов на счету осталось ${balanceCredits} кредитов.`;
    }
}
 console.log(message);