let beginCount = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSaveValue = document.getElementsByClassName('monthsavings-value'),
    yearSaveValue = document.getElementsByClassName('yearsavings-value'),

    input = document.getElementsByClassName('expenses-item'),

    btn = document.getElementsByTagName('button'),
    btnConfirmF = btn[0],
    btnConfirmS = btn[1],
    btnCount = btn[2],

    inputOptExpenses = document.querySelectorAll('input.optionalexpenses-item'),

    inputChooseIncome = document.querySelector('#income'),
    inputSaving = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),

    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

