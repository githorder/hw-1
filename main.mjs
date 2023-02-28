import {
  countUniqueWordsIn,
  Product,
  sum,
  subtract,
  multiply,
  divide,
} from './lib/index.mjs';

const products = [
  new Product('Acer 54', 1000, 10, 'Powerful computer for games'),
  new Product('Lenova IdeaPad 4', 700, 100, 'Computer for work'),
  new Product('Iphone 5', 400, 5, 'Old and weak smartphone from apples'),
  new Product('Iphone 8', 1200, 40, 'Powerful smartphone from apple'),
];

Product.filterProducts('name-contains-no&price->100', products);
console.log(
  countUniqueWordsIn(
    'Текст, в котором слово текст несколько раз встречается и слово тоже '.repeat(
      11
    )
  )
);
console.log(sum('100000000000000000000000', '30'));
console.log(subtract('100000000000000000000000', '30'));
console.log(multiply('100000000000000000000000', '30'));
console.log(divide('100000000000000000000000', '30'));
