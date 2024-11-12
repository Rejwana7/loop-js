// for (let i = 0; i < 15; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }

// console.log('life after break up');

// let n=54;
// while(n >25){
//     // console.log(n)
//     if(n <50 ){
//         break;
//     }
//     console.log(n)
//     n--;

// }

// / 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    //let j = Math.sqrt(i);
    let sqrt = Math.sqrt(i);
  
    if (i>1 && sqrt * sqrt == i) {
    console.log(i);
      break;
    }
   
  }

//   How It Works with an Example:
// Iteration 1: i = 1

// sqrt = Math.sqrt(1) → sqrt = 1
// The condition 1 > 1 && 1 * 1 == 1 is false (because 1 > 1 is false).
// Iteration 2: i = 2

// sqrt = Math.sqrt(2) → sqrt ≈ 1.414
// The condition 2 > 1 && 1.414 * 1.414 == 2 is false (since 1.414 * 1.414 ≈ 1.999).
// Iteration 3: i = 3

// sqrt = Math.sqrt(3) → sqrt ≈ 1.732
// The condition 3 > 1 && 1.732 * 1.732 == 3 is false (since 1.732 * 1.732 ≈ 2.999).
// Iteration 4: i = 4

// sqrt = Math.sqrt(4) → sqrt = 2
// The condition 4 > 1 && 2 * 2 == 4 is true.
// It prints 2 and exits the loop.


// for(let i=1;i<=100;i++){
//     if(i>1 && Math.sqrt(i)%1 ===0){
//         console.log(`First square number found: ${i}`);
//     break;
//     }
// }
