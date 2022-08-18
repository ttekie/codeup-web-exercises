"use strict";
/*=================== While Loops Exercise ===================*/
//
let number = 1;
while(number < 65536) {
    number *= 2;
    console.log(number);
}

// generate a number between 50 and 100
let allCones = Math.floor(Math.random() * 51) + 50;

do {
    // generate a random number of cones the customer want's to get
   let conesWanted = Math.ceil(Math.random() * 5) + 1;
   if(conesWanted > allCones) {
       console.log(`Can not sell you ${conesWanted} I only have ${allCones} left`);
   } else {
       console.log(`${conesWanted} sold....`);
       allCones = allCones - conesWanted;
   }
   console.log(`${allCones} left`);
} while(allCones > 0);
console.log("Yay! I sold them all!");
