const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';
let message;
const inputCountry = prompt('Введите название Вашей страны:');
if (inputCountry === null) {
    alert ('Вы отменили ввод Вашей страны!');
} else {
    switch (inputCountry.toLowerCase()) {
        case china.toLowerCase():
            message = `Доставка в ${china} будет стоить 100 кредитов.`;
            break;
        case chile.toLowerCase():
            message = `Доставка в ${chile} будет стоить 250 кредитов.`;
            break;
        case australia.toLowerCase():
            message = `Доставка в ${australia} будет стоить 170 кредитов.`;
            break;
        case india.toLowerCase():
            message = `Доставка в ${india} будет стоить 80 кредитов.`;
            break;
        case jamaica.toLowerCase():
            message = `Доставка в ${jamaica} будет стоить 120 кредитов.`;
            break;
        default:
            message = `В вашей стране доставка не доступна.`;
    }
    alert (message);
}

