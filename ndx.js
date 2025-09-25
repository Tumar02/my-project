// DOM - Document Object Model

// Получаем элементы
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');


// DOM - Document Object Model

const destination = document.getElementById('destination');
const ticketsInput = document.getElementById('tickets');
const summary = document.getElementById('summary');

// Обработчик событий при вводе имени
nameInput.addEventListener('input', function(){
    hello.textContent = "Привет, " + nameInput.value + "!";
});

// Обработчик событий при клике на кнопку
btn.addEventListener('click', function(){
    const name = nameInput.value.trim();
    const dest = destination.value;
    const tickets = ticketsInput.value.trim();

    // Проверка: если поля не заполнены — alert
    if (name === '' || dest === '' || tickets === '' || Number(tickets) <= 0) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Сообщение об успешной покупке
    status.textContent = 'Вы купили билет(ы)';
    status.style.color = 'green';

    // Создаём строку как таблицу без <table>
    const row = document.createElement('div');
    row.classList.add('row');

    const nameCell = document.createElement('div');
    nameCell.classList.add('cell');
    nameCell.textContent = 'Имя: ' + name;

    const destCell = document.createElement('div');
    destCell.classList.add('cell');
    destCell.textContent = 'Направление: ' + dest;

    const ticketsCell = document.createElement('div');
    ticketsCell.classList.add('cell');
    ticketsCell.textContent = 'Билетов: ' + tickets;

    row.appendChild(nameCell);
    row.appendChild(destCell);
    row.appendChild(ticketsCell);

    summary.appendChild(row);
});

// При наведении на кнопку
btn.addEventListener("mouseover", function(){
    status.textContent = 'Вы готовы купить билет?';
    status.style.color = 'hwb(80 9% 43%)';
});

// При двойном нажатии на кнопку 
btn.addEventListener('dblclick', function(){
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = '#BA55D3';
});
