let money = promot("Ваш бюджет?");
let name = prompt("Название вашего магазина");
let time = 19;

let mainList = {
 budget: money,
 shopName: name,
 shopGoods: [],
 employers: {},
 open: false
}

for (let i = 0; i < 5; i++){
 let a = prompt("Какой тип товаров будем продавать?");
 
 if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.lenght < 50 ){
  console.log('Все верно!')
  mainList.shopGoods[i] = a;
 } 
}

if (time < 0){
 console.log('Не может быть!');
} else if(time > 8 && time <20) {
 console.log('Время работать');
} else if(time < 24) {
 console.log('Уже поздно');
} else {
 console.log('В сутках только 24 часа');
}

alert(mainList.budget / 30);

console.log(mainList);


