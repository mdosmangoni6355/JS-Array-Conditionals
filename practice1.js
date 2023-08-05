var fruits = ['Apple', 'Banana', 'Orange'];
var indexBanana = fruits.indexOf('Banana');
fruits[indexBanana] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// Alternative Method
var fruits = ['Apple', 'Banana', 'Orange'];
fruits[1] = 'Mango';
fruits[2] = 'Watermelon';
console.log(fruits);