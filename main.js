function printHello() {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
}

function isNegativeOrPositive(number) {
  if (number < 0) {
    console.log(number, "is Negative");
  } else {
    console.log(number, "is Positive");
  }
}

function greatestAmongTwo(number1, number2) {
  if (number1 > number2) {
    console.log(number1, "is greater than", number2);
    return number1;
  } else if (number2 > number1) {
    console.log(number2, "is greater than", number1);
    return number2;
  } else {
    console.log("numbers are equal");
    return number1;
  }
}
printHello();

isNegativeOrPositive(10);
isNegativeOrPositive(-10);

greatestAmongTwo(10, 20);
greatestAmongTwo(100, 10);
