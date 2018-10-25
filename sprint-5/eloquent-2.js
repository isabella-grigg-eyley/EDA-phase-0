// Triangle Looping

let str = "#";
for (let i = 0; i < 7; i++) {
  console.log(str);
  str += "#";
}

// FizzBuzz

let num = 1;
for (let i = 0; i < 100; i++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
    num++;
  } else if (num % 3 == 0) {
    console.log("Fizz");
    num++;
  } else if (num % 5 == 0) {
    console.log("Buzz");
    num++;
  } else {
    console.log(num);
    num++;
  }
}

// Chessboard

let size = 8;
let str = "";
let isHash = false;
for (let h = 0; h < size; h++) {
    for (let w = 0; w < size; w++) {
        switch (isHash) {
            case false:
                str += " ";
                isHash = !isHash;
                break;
            case true:
                str += "#";
                isHash = !isHash;
                break;
        }
    }
    str += "\n";
    if (size % 2 == 0) {
        isHash = !isHash;
    }
}
console.log(str);