// write code here
const array1 = [100, 200.25, 300.84, 400.3];
const result = array1.map(num => num.toFixed(2));
console.log(result); // ["100.00", "200.25", "300.84", "400.30"]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const array2 = [0, 5, 10, 7, 6, 5, 0];
const result = array2.map(index => months[index]);
console.log(result); // ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array3 = [1, 16, 81, 256, 625, 1296];
const result = array3.map(num => Math.sqrt(num));
console.log(result); // [1, 4, 9, 16, 25, 36]


