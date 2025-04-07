// function getElementWidth(content, padding, border) {

//     const contentWidth = parseFloat(content);
//     const paddingWidth = parseFloat(padding);
//     const borderWidth = parseFloat(border);
    
//     return contentWidth + 2 * (paddingWidth + borderWidth);
//   }
  

//   console.log(getElementWidth("50px", "8px", "4px")); 
//   console.log(getElementWidth("60px", "12px", "8.5px")); 
//   console.log(getElementWidth("200px", "0px", "0px")); 
  


// function checkForSpam(message) {

//   const lowerCaseMessage = message.toLowerCase();


//   return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); 
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!")); 
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
// console.log(checkForSpam("[SPAM] How to earn fast money?")); 



// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },


  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};


console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());

