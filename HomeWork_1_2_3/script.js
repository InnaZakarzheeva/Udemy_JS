'use strict';
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

var appData = {
    bank: money,
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let  a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                 b = prompt('Во сколько обойдется?', '');
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
            } else {
                i--;
            }
            
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.bank / 30).toFixed();
        alert ('Бюджет на 1 день составляет ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накопления?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++){
            let question = prompt('Статья необязательных расходов');
            appData.optionalExpense[i] = question;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while(!isNaN(items) || items== "" || items == null){
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach(function(index, element) {
            alert('Способы доп. заработка: ' + index+1 + ':' + element)
        })
    },
    enterAllData: function() {
        for (var key in appData) {
            if( appData.hasOwnProperty(key) ) {
                alert('Наша программа включает в себя данные: ' + key + " = " + appData[key]);
            }
        } 
    }
}
