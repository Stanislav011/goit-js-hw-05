// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); 
// console.log(makeTransaction(3, 1000)); 
// console.log(makeTransaction(10, 500)); 


// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
  
//     if (totalPrice > customerCredits) {
//       return "Insufficient funds!";
//     } else {
//       return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
//   }
  
//   console.log(makeTransaction(5, 3000, 23000));
//   console.log(makeTransaction(3, 1000, 15000));
//   console.log(makeTransaction(10, 5000, 8000)); 
//   console.log(makeTransaction(8, 2000, 10000)); 
//   console.log(makeTransaction(10, 500, 5000)); 
  



// function slugify(title) {

//   return title.toLowerCase().split(' ').join('-');
// }


// console.log(slugify("Arrays for beginners"));  
// console.log(slugify("English for developer")); 
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));




function isEnoughCapacity(products, containerSize) {
  const totalQuantity = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
  
  return totalQuantity <= containerSize;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); 

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); 

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); 

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); 


