//Цены на блюдо
const prices = {
    coffee: 100,
    tea: 20,
    burger: 200,
    pizza: 350
};

//Получение элементов
const nameInput = document.getElementById('name');
const dishSelect = document.getElementById('dish');
const countInput = document.getElementById('count');
const orderBtn = document.getElementById('orderBtn');
const status = document.getElementById('status');
const total = document.getElementById('total');

let totalSum = 0;

orderBtn.addEventListener('click', function(){
    const name = nameInput.value.trim();
    const dish = dishSelect.value;
    const count = parseInt(countInput.value);


if(!name || !count || count <=0){
    status.textContent = 'Заполните все поля!';
    status.style.color = 'red';
    return;
}

const sum = prices[dish] * count;
totalSum += sum;

let dishName = '';
switch(dish){
    case "coffee":
        dishName = 'Кофе';
        break;
    case 'tea':
        dishName = 'Чай';
        break;
    case 'burger':
        dishName = 'Бургер';
        break;
    case 'pizza':
        dishName = 'Пицца';
        break;
}

status.textContent = `${name}, вы заказали ${count}  ${dishName} на сумму ${sum} сом.`;
status.style.color = 'darkgreen';
total.textContent = `Общая сумму: ${totalSum} сом`;

countInput.value = "";
});