// Minimum
function min(val1, val2) {
    if (val1 < val2) {
    return val1;
    } else {return val2;}
}
    
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion

function isEven(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else {
      return isEven(num -2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean Counting

function countBs(str) {
    return countChar(str, "B");
  }
  
  function countChar (str, char) {
    let totalChar = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        totalChar++;
      }
    }
    return totalChar;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4