let fruits= ['apple','bannana','mango','orange','strawberry','kiwi','grape','watermelon','pinneaple','blueberry'];
let vegetables= ['carrot','tomato','pepper','lettuce','cucumber','brocoli','onion','garlic','potato','ginger'];
let fastFoods= ['hamburger','fries','hot dog','pizza','ice cream','chicken nuggets','sandwich','onion rings','taco','burrito'];

console.log('==== Inventory Management System ====');
console.log('---- Fruits ----');
for (let i = 0; i < fruits.length;i++)  {
    let j = i + 1; 
    console.log( ' '+ j +'.'+ fruits[i]);
}
console.log('-------------------');
console.log(`Total number of fruits: ${fruits.length}`)
console.log('---- Vegetables ----');
