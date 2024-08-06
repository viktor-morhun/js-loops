'use strict'

// Task 1.1
const ageButton = document.getElementById("age-submit");
ageButton.addEventListener("click", determineAgeGroup);

function determineAgeGroup() {
  let userAge = document.getElementById("age").value;
  let userGroup = "";

  if (!userAge || Number(userAge) > 130 || Number(userAge) < 0) {
    userGroup = 'Please, enter your age (from 0 to 130).';
  } else {
    userAge = Number(userAge);

    switch (true) {
      case userAge >= 0 && userAge <= 11:
        userGroup = "You are a child ;)";
        break;
      case userAge > 11 && userAge < 18:
        userGroup = "You are a teenager.";
        break;
      case userAge >= 18 && userAge < 60:
        userGroup = "You are an adult.";
        break;
      case userAge > 60:
        userGroup = "You are a senior.";
        break;
      default:
        userGroup = "Please, enter a valid positive number.";
    }
  }
  
  document.getElementById("age-result").innerHTML = userGroup;
}

// Task 1.2
const symbolButton = document.getElementById("number-submit");
symbolButton.addEventListener("click", findSymbol);

function findSymbol() {
  const userNumber = Number(document.querySelector("#number").value);
  const symbolList = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

  if (userNumber < 0 || userNumber > 9 || !document.querySelector("#number").value) {
    document.getElementById("number-result").innerHTML = "Enter a number in range 0 to 9.";
  } else {
    document.getElementById("number-result").innerHTML = `Your symbol is ${symbolList[userNumber]}`;
  }
}

// Task 1.3
const rangeButton = document.getElementById('range-submit');
rangeButton.addEventListener("click", calculateSum);

function calculateSum() {
  if (!document.querySelector("#range-start").value || !document.querySelector("#range-end").value) {
    document.getElementById("range-result").innerHTML = 'Please enter two numbers.';  
  } else {
    const firstNumber = parseInt(document.querySelector("#range-start").value);
    const secondNumber = parseInt(document.querySelector("#range-end").value);
    let result = 0;

    if (firstNumber > secondNumber) {
      document.getElementById("range-result").innerHTML = "The first number must be less than the second.";
    } else {
      result = (firstNumber + secondNumber) * (secondNumber - firstNumber + 1) / 2; 
      document.getElementById("range-result").innerHTML = `Sum of all numbers from ${firstNumber} to ${secondNumber} is equal to ${result}`;  
    }
  }
}

// Task 1.4
const gcdButton = document.getElementById('gcd-submit');
gcdButton.addEventListener('click', findGCD);

function findGCD() {
  const firstNumber = Number(document.getElementById('gcd-number1').value);
  const secondNumber = Number(document.getElementById('gcd-number2').value);

  if (firstNumber <= 0 || secondNumber <= 0 || firstNumber > 999999999999999 || secondNumber > 999999999999999) {
    document.getElementById('gcd-result').innerHTML = `Please enter two positive numbers in range 1 to 999999999999999`;
  } else {
    const numbers = firstNumber > secondNumber 
    ? [secondNumber, firstNumber]
    : [firstNumber, secondNumber];
  
    document.getElementById('gcd-result').innerHTML = `Calculating...`;

    for (let i = numbers[0]; i > 0; i--) {
      if (numbers[1] % i === 0 && numbers[0] % i === 0) {
        document.getElementById('gcd-result').innerHTML = `GCD of the giving numbers(${firstNumber}, ${secondNumber}) is: ${i}`;
        break;
      }
    }  
  }
}

// Task 1.5
const divisorsButton = document.getElementById('divisor-submit');
divisorsButton.addEventListener('click', findDivisors);

function findDivisors() {
  const dividedNumber = Number(document.getElementById('divisor-number').value);

  if (dividedNumber <= 0) {
    document.getElementById('divisor-result').innerHTML = 'Please enter a positive number.';
  } else {
    let divisorsArr = [];

    for(let i = 1; i <= Math.sqrt(dividedNumber); i++) {
      if (dividedNumber % i === 0) {
        if (dividedNumber / i === i) {
          divisorsArr.push(i);
        } else {
          divisorsArr.push(i, dividedNumber/i);
        }
      }
    }
  
    document.getElementById('divisor-result').innerHTML = `Divisors of ${dividedNumber} are: ${divisorsArr.sort((a, b) => a - b).join(', ')}.`;
  }
}

// Task 2.1
const palindromeButton = document.getElementById('palindrome-submit');
palindromeButton.addEventListener('click', checkPalindrome);

function checkPalindrome() {
  const palindromeNumber = document.getElementById('palindrome-number').value;

  if (Number(palindromeNumber) <= 0) {
    document.getElementById('palindrome-result').innerHTML = 'Please enter a positive number.';
  } else {
    if (palindromeNumber.split('').reverse().join('') === palindromeNumber && palindromeNumber.length > 1) {
      document.getElementById('palindrome-result').innerHTML = `Yes, ${palindromeNumber} is a palindrome.`;
    } else {
      document.getElementById('palindrome-result').innerHTML = `No, ${palindromeNumber} isn't a palindrome.`;
    }
  }
}

// Task 2.2
const discountButton = document.getElementById('discount-submit');
discountButton.addEventListener('click', calculateDiscount);

function calculateDiscount() {
  const purchaseAmount = Number(document.getElementById('purchase-amount').value);
  let discount = '';

  if (purchaseAmount <= 0) {
    discount = 'Please enter a purchase amount (minimum value is 1 eur)';
  } else {
    switch (true) {
      case purchaseAmount < 200:
        discount = `There is no discount. Total to be paid ${purchaseAmount} eur. Mininmum amount for discount is 300 eur.`;
        break;
  
      case purchaseAmount < 300:
        discount = `Your discount is 3%. Total to be paid ${(purchaseAmount * 0.97).toFixed(2)} eur.`;
        break;
  
      case purchaseAmount < 500:
        discount = `Your discount is 5%. Total to be paid ${(purchaseAmount * 0.95).toFixed(2)} eur.`;
        break;
  
      case purchaseAmount >= 500:
        discount = `Your discount is 7%. Total to be paid ${(purchaseAmount * 0.93).toFixed(2)} eur.`;
        break;
    }
  }

  document.getElementById('discount-result').innerHTML = discount;
}

// Task 2.3
const statisticsButton = document.getElementById('statistics-submit');
statisticsButton.addEventListener('click', statisticNumbers);

function statisticNumbers() {
  const userNumbers = document.getElementById('statistics-number').value.trim();
  let evenCounter = 0;
  let oddCounter = 0;
  let positiveCounter = 0;
  let negativeCounter = 0;

  if (userNumbers.match(/^-?\d+(,-?\d+)*$/)) {
    userNumbers.split(',').forEach(element => {
      if (Number(element) % 2 === 0) {
        evenCounter++;
      } else {
        oddCounter++;
      }
      if (Number(element) > 0) {
        positiveCounter++;
      } else if (Number(element) < 0) {
        negativeCounter++;
      }
    });

    document.getElementById('statistics-result').innerHTML = `Even: ${evenCounter}, odd: ${oddCounter}, positive: ${positiveCounter}, negative: ${negativeCounter}, zero: ${evenCounter + oddCounter - positiveCounter - negativeCounter}`;
  } else {
    document.getElementById('statistics-result').innerHTML = 'Please, enter numbers separated by comma, e.g. 23,8,96,441';
  }
}

// Task 2.4
const dayButton = document.getElementById('weekday-submit');
let dayCounter = 0;
dayButton.addEventListener('click', dayRoll);

function dayRoll() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  document.getElementById('weekday-result').innerHTML = `${days[dayCounter]}. Want to see the next day?`;
  dayCounter = dayCounter === 6 ? 0 : ++dayCounter;
}

// Task 3.1
const guessStart = document.getElementById('guess-start');
guessStart.addEventListener('click', startGuess);

function startGuess() {
  const decreaseButton = document.getElementById('less-number');
  const increaseButton = document.getElementById('bigger-number');
  const resetButton = document.getElementById('block-refresh');
  const guessEnd = document.getElementById('guess-end');
  const guessResult = document.getElementById('guess-result');

  guessStart.classList.add('hide');
  decreaseButton.classList.remove('hide');
  guessEnd.classList.remove('hide');
  increaseButton.classList.remove('hide');

  decreaseButton.addEventListener('click', lowerHalf);
  increaseButton.addEventListener('click', upperHalf);
  guessEnd.addEventListener('click', () => endGuess(`Your number is ${midNumber}`));
  resetButton.addEventListener('click', () => endGuess(''));

  let startIndex = 1;
  let endIndex = 100;
  let midNumber = Math.floor((endIndex + startIndex) / 2);
  guessResult.innerHTML = `Is your number ${midNumber}?`;

  function lowerHalf() {
    endIndex = midNumber;
    midNumber = Math.floor((endIndex + startIndex) / 2);
    guessResult.innerHTML = `Is your number ${midNumber}?`;
  }

  function upperHalf() {
    startIndex = midNumber;
    midNumber = Math.floor((endIndex + startIndex) / 2);
    guessResult.innerHTML = `Is your number ${midNumber}?`;
  }
  
  function endGuess(output) { 
    guessStart.classList.remove('hide');
    decreaseButton.classList.add('hide');
    guessEnd.classList.add('hide');
    increaseButton.classList.add('hide');

    guessResult.innerHTML = output;
  }
}

// Task 3.2
const multiplyButton = document.getElementById('multiplication-generate');
multiplyButton.addEventListener('click', generateTable);

function generateTable() {
  const rootDiv = document.getElementById('multiplication-result');
  rootDiv.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.className = 'task__container';

    for (let j = 1; j <= 10; j++) {
      const innerSpan = document.createElement('span');
      innerSpan.className = 'multiply__span';
      innerSpan.textContent = `${i} * ${j} = ${i * j}`;

      innerDiv.appendChild(innerSpan);
    }

    rootDiv.appendChild(innerDiv);
  }
}

// Task 3.3
const dateButton = document.getElementById('date-submit');
dateButton.addEventListener('click', nextDay);

function nextDay() {
  const currentDate = document.getElementById('user-date').value;

  if (currentDate) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    const formattedDate = date.toString().split(' ').slice(1, 4).join(' ');

    document.getElementById('date-result').innerHTML = `Next day is ${formattedDate}`;
  } else {
    document.getElementById('date-result').innerHTML = 'Please enter the correct date.';
  }
}

// Reset button 
const resetButton = document.querySelectorAll('.reset__button:not(#block-refresh)');
resetButton.forEach(button => {
  button.addEventListener('click', () => resetBlock(button));
});

function resetBlock(element) {
  const section = element.closest('section');
  const sectionInputs = section.querySelectorAll('.task__input');
  const sectionResults = section.querySelectorAll('.task__result');

  sectionInputs.forEach(input => input.value = '');
  sectionResults.forEach(result => result.innerHTML = '');
}
