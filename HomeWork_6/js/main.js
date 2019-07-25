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

