let beginCount = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSaveValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSaveValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    btnConfirmF = document.getElementsByTagName('button')[0],
    btnConfirmS = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],

    inputOptExpenses = document.querySelectorAll('input.optionalexpenses-item'),

    inputChooseIncome = document.querySelector('#income'),
    inputSaving = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),

    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;

    btnConfirmF.disabled = true;
    btnConfirmS.disabled = true;
    btnCount.disabled = true;

    beginCount.addEventListener('click', function() {
        btnConfirmF.disabled = false;
        btnConfirmS.disabled = false;
        btnCount.disabled = false;

        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', '');
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt('Ваш бюджет на месяц?', '');
        }
        appData.bank = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        year.value = new Date(Date.parse(time)).getFullYear();
        month.value = new Date(Date.parse(time)).getMonth() + 1;
        day.value = new Date(Date.parse(time)).getDate();
    });

    btnConfirmF.addEventListener('click', function() {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++){
            let  a = expensesItem[i].value,
                 b = expensesItem[++i].value;
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }  
        };
        expensesValue.textContent = sum;
    });

    btnConfirmS.addEventListener('click', function() {
        for (let i = 0; i <= inputOptExpenses.length; i++){
            let question = inputOptExpenses[i].value;
            appData.optionalExpense[i] = question;
            optExpensesValue.textContent += appData.optionalExpense[i] + ' '; 
        }
    });

    btnCount.addEventListener('click', function() {
        if (appData.bank != undefined) {
            appData.moneyPerDay = ((appData.bank - +expensesValue.innerHTML) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;

            if(appData.moneyPerDay < 100){
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000){
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Произошла ошибка';
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    inputChooseIncome.addEventListener('input', function() {
        let items = inputChooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    inputSaving.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sum.addEventListener('input', function() {
        if (appData.savings == true) {
            let summ = +sum.value,
                perc = +percent.value;

            appData.monthIncome = summ / 100 / 12 * perc;
            appData.yearIncome = summ / 100 * perc;

            monthSaveValue.textContent = appData.monthIncome.toFixed(1);
            yearSaveValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percent.addEventListener('input', function() {
        if (appData.savings == true) {
            let summ = +sum.value,
                perc = +percent.value;

            appData.monthIncome = summ / 100 / 12 * perc;
            appData.yearIncome = summ / 100 * perc;

            monthSaveValue.textContent = appData.monthIncome.toFixed(1);
            yearSaveValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    var appData = {
        bank: money,
        timeData: time,
        expenses: {},
        optionalExpense: {},
        income: [],
        savings: false,
    }