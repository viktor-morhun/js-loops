'use strict'

//Task 1.1
const AGE_BUTTON = document.getElementById("age-submit");
AGE_BUTTON.addEventListener("click", determineAgeGroup);

function determineAgeGroup() {
  let USER_AGE = document.getElementById("age").value;
  let userGroup = "";

  if (!USER_AGE || Number(USER_AGE) > 130 || Number(USER_AGE) < 0) {
    userGroup = 'Please, enter your age (from 0 to 130).';
  } else {
    USER_AGE = Number(USER_AGE);

    switch (true) {
      case USER_AGE >= 0 && USER_AGE <= 11:
        userGroup = "You are a child ;)";
        break;
      case USER_AGE > 11 && USER_AGE < 18:
        userGroup = "You are a teenager.";
        break;
      case USER_AGE >= 18 && USER_AGE < 60:
        userGroup = "You are an adult.";
        break;
      case USER_AGE > 60:
        userGroup = "You are a senior.";
        break;
      default:
        userGroup = "Please, enter a valid positive number.";
    }
  }
  
  document.getElementById("age-result").innerHTML = userGroup;
}


//Task 1.2
const SYMBOL_BUTTON = document.getElementById("number-submit");
SYMBOL_BUTTON.addEventListener("click", findSymbol);

function findSymbol() {
  const USER_NUMBER = Number(document.querySelector("#number").value);
  const SYMBOL_LIST = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

  if (USER_NUMBER < 0 || USER_NUMBER > 9 || !document.querySelector("#number").value) {
    document.getElementById("number-result").innerHTML = "Enter a number in range 0 to 9." 
  } else {
    document.getElementById("number-result").innerHTML = `Your symbol is ${SYMBOL_LIST[USER_NUMBER]}`;
  }
}


//Task 1.3
const RANGE_BUTTON = document.getElementById('range-submit');
RANGE_BUTTON.addEventListener("click", calculateSum);

function calculateSum() {
  if (!document.querySelector("#range-start").value || !document.querySelector("#range-end").value) {
    document.getElementById("range-result").innerHTML = 'Please enter two numbers.';  
  } else {
    const FIRST_NUMBER = parseInt(document.querySelector("#range-start").value);
    const SECOND_NUMBER = parseInt(document.querySelector("#range-end").value);
    let result = 0;

    if (FIRST_NUMBER > SECOND_NUMBER) {
      document.getElementById("range-result").innerHTML = "The first number must be less than the second."
    } else {
      result = (FIRST_NUMBER + SECOND_NUMBER) * (SECOND_NUMBER - FIRST_NUMBER + 1) / 2; 
      document.getElementById("range-result").innerHTML = `Sum of all numbers from ${FIRST_NUMBER} to ${SECOND_NUMBER} is equal to ${result}`;  
    }
  }
  
}


//Task 1.4
const GCD_BUTTON = document.getElementById('gcd-submit');
GCD_BUTTON.addEventListener('click', findGCD);

function findGCD() {
  const FIRST_NUMBER = Number(document.getElementById('gcd-number1').value);
  const SECOND_NUMBER = Number(document.getElementById('gcd-number2').value);

  if (FIRST_NUMBER <= 0 || SECOND_NUMBER <= 0 || FIRST_NUMBER > 999999999999999 || SECOND_NUMBER > 999999999999999) {
    document.getElementById('gcd-result').innerHTML = `Please enter two positive numbers in range 1 to 999999999999999`;
  } else {
    const NUMBERS = FIRST_NUMBER > SECOND_NUMBER 
    ? [SECOND_NUMBER, FIRST_NUMBER]
    : [FIRST_NUMBER, SECOND_NUMBER];
  
    document.getElementById('gcd-result').innerHTML = `Calculating...`;

    for (let i = NUMBERS[0]; i > 0; i--) {
      if (NUMBERS[1] % i === 0 && NUMBERS[0] % i === 0) {
        document.getElementById('gcd-result').innerHTML = `GCD of the giving numbers(${FIRST_NUMBER}, ${SECOND_NUMBER}) is: ${i}`;
        break;
      }
    }  
  }
}


//Task 1.5
const DIVISORS_BUTTON = document.getElementById('divisor-submit');
DIVISORS_BUTTON.addEventListener('click', findDivisors);

function findDivisors() {
  const DIVIDED_NUMBER = Number(document.getElementById('divisor-number').value);

  if (DIVIDED_NUMBER <= 0) {
    document.getElementById('divisor-result').innerHTML = 'Please enter a positive number.'
  } else {
    let divisorsArr = [];

    for(let i = 1; i <= Math.sqrt(DIVIDED_NUMBER); i++) {
      if (DIVIDED_NUMBER % i === 0) {
        if (DIVIDED_NUMBER / i === i) {
          divisorsArr.push(i);
        } else {
          divisorsArr.push(i, DIVIDED_NUMBER/i);
        }
      }
    }
  
    document.getElementById('divisor-result').innerHTML = `Divisors of ${DIVIDED_NUMBER} are: ${divisorsArr.sort((a, b) => a - b).join(', ')}.`;
  }
}


//Task 2.1
const PALINDROME_BUTTON = document.getElementById('palindrome-submit');
PALINDROME_BUTTON.addEventListener('click', checkPalindrome);

function checkPalindrome() {
  const PALINDROME_NUMBER = document.getElementById('palindrome-number').value;

  if (Number(PALINDROME_NUMBER) <= 0) {
    document.getElementById('palindrome-result').innerHTML = 'Please enter a positive number.';
  } else {
    if (PALINDROME_NUMBER.split('').reverse().join('') === PALINDROME_NUMBER && PALINDROME_NUMBER.length > 1) {
      document.getElementById('palindrome-result').innerHTML = `Yes, ${PALINDROME_NUMBER} is a palindrome.`;
    } else {
      document.getElementById('palindrome-result').innerHTML = `No, ${PALINDROME_NUMBER} isn't a palindrome.`;
    }
  }
}


//Task 2.2
const DISCOUNT_BUTTON = document.getElementById('discount-submit');
DISCOUNT_BUTTON.addEventListener('click', calculateDiscount);

function calculateDiscount() {
  const PURCHASE_AMOUNT = Number(document.getElementById('purchase-amount').value);
  let discount = '';

  if (PURCHASE_AMOUNT <= 0) {
    discount = 'Please enter a purchase amount (minimum value is 1 eur)';
  } else {
    switch (true) {
      case PURCHASE_AMOUNT < 200:
        discount = `There is no discount. Total to be paid ${PURCHASE_AMOUNT} eur. Mininmum amount for discount is 300 eur.`;
        break;
  
      case PURCHASE_AMOUNT < 300:
        discount = `Your discount is 3%. Total to be paid ${(PURCHASE_AMOUNT * 0.97).toFixed(2)} eur.`;
        break;
  
      case PURCHASE_AMOUNT < 500:
        discount = `Your discount is 5%. Total to be paid ${(PURCHASE_AMOUNT * 0.95).toFixed(2)} eur.`;
        break;
  
      case PURCHASE_AMOUNT >= 500:
        discount = `Your discount is 7%. Total to be paid ${(PURCHASE_AMOUNT * 0.93).toFixed(2)} eur.`;
        break;
    }
  }

  document.getElementById('discount-result').innerHTML = discount;
}

//Task 2.3
const STATISTICS_BUTTON = document.getElementById('statistics-submit');
STATISTICS_BUTTON.addEventListener('click', statisticNumbers);


function statisticNumbers() {
  const USER_NUMBERS = document.getElementById('statistics-number').value.trim();
  let evenCounter = 0;
  let oddCounter = 0;
  let positiveCounter = 0;
  let negativeCounter = 0;

  if (USER_NUMBERS.match(/^-?\d+(,-?\d+)*$/)) {
    USER_NUMBERS.split(',').forEach(element => {
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
    });;

    document.getElementById('statistics-result').innerHTML = `Even: ${evenCounter}, odd: ${oddCounter}, positive: ${positiveCounter}, negative: ${negativeCounter}, zero: ${evenCounter + oddCounter - positiveCounter - negativeCounter}`;
  } else {
    document.getElementById('statistics-result').innerHTML = 'Please, enter numbers separated by comma, e.g. 23,8,96,441';
  }
}


//Task 2.4
const DAY_BUTTON = document.getElementById('weekday-submit');
let dayCounter = 0;
DAY_BUTTON.addEventListener('click', dayRoll);

function dayRoll() {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  document.getElementById('weekday-result').innerHTML = `${DAYS[dayCounter]}. Want to see the next day?`;
  dayCounter = dayCounter === 6 ? 0 : ++dayCounter;
}


//Task 3.1
const GUESS_START = document.getElementById('guess-start');
GUESS_START.addEventListener('click', startGuess);

function startGuess(dir) {
  const DECREASE_BUTTON = document.getElementById('less-number');
  const INCREASE_BUTTON = document.getElementById('bigger-number');
  const RESET_BUTTON = document.getElementById('block-refresh');
  const GUESS_END = document.getElementById('guess-end');
  const GUESS_RESULT = document.getElementById('guess-result');

  GUESS_START.setAttribute('hidden', '');
  DECREASE_BUTTON.removeAttribute('hidden');
  GUESS_END.removeAttribute('hidden');
  INCREASE_BUTTON.removeAttribute('hidden');

  DECREASE_BUTTON.addEventListener('click', lowerHalf);
  INCREASE_BUTTON.addEventListener('click', upperHalf);
  GUESS_END.addEventListener('click', endGuess);
  RESET_BUTTON.addEventListener('click', resetBlock);

  let startIndex = 1;
  let endIndex = 100;
  let midNumber = Math.floor((endIndex + startIndex)/2);
  GUESS_RESULT.innerHTML = `Is your number ${midNumber}?`;


  function lowerHalf() {
    endIndex = midNumber;
    midNumber = Math.floor((endIndex + startIndex)/2);
    GUESS_RESULT.innerHTML = `Is your number ${midNumber}?`;
  }

  function upperHalf() {
    startIndex = midNumber;
    midNumber = Math.floor((endIndex + startIndex)/2);
    GUESS_RESULT.innerHTML = `Is your number ${midNumber}?`;
  }
  
  function endGuess() { 
    GUESS_START.removeAttribute('hidden');
    DECREASE_BUTTON.setAttribute('hidden', '');
    GUESS_END.setAttribute('hidden', '');
    INCREASE_BUTTON.setAttribute('hidden', '');
  
    GUESS_RESULT.innerHTML = `Your number is ${midNumber}`;
  }

  function resetBlock() {
    GUESS_START.removeAttribute('hidden');
    DECREASE_BUTTON.setAttribute('hidden', '');
    INCREASE_BUTTON.setAttribute('hidden', '');
    GUESS_END.setAttribute('hidden', '');

    GUESS_RESULT.innerHTML = '';
  }
}


//Task 3.2
const MULTIPLY_BUTTON = document.getElementById('multiplication-generate');
MULTIPLY_BUTTON.addEventListener('click', generateTable);

function generateTable() {
  const ROOT_DIV = document.getElementById('multiplication-result');
  ROOT_DIV.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    const INNER_DIV = document.createElement('div');
    INNER_DIV.className = 'task__container';

    for (let j = 1; j <= 10; j++) {
      const INNER_SPAN = document.createElement('span');
      INNER_SPAN.className = 'multiply__span';
      INNER_SPAN.textContent = `${i} * ${j} = ${i*j}`;

      INNER_DIV.appendChild(INNER_SPAN);
    }

    ROOT_DIV.appendChild(INNER_DIV);
  }
}


//Task 3.3
const DATE_BUTTON = document.getElementById('date-submit');
DATE_BUTTON.addEventListener('click', nextDay);

function nextDay() {
  const CURRENT_DATE = document.getElementById('user-date').value;

  if (CURRENT_DATE) {
    const DATE = new Date(CURRENT_DATE);
    DATE.setDate(DATE.getDate() + 1);
    const FORMATED_DATE = DATE.toString().split(' ').slice(1, 4).join(' ');

    document.getElementById('date-result').innerHTML = `Next day is ${FORMATED_DATE}`;
  } else {
    document.getElementById('date-result').innerHTML = 'Please enter the correct date.';
  }
}


//Reset button 
const RESET_BUTTON = document.querySelectorAll('.reset__button:not(#block-refresh)');
RESET_BUTTON.forEach(button => {
  button.addEventListener('click', () => resetBlock(button));
});


function resetBlock(element) {
  const SECTION = element.closest('section');
  const SECTION_INPUTS = SECTION.querySelectorAll('.task__input');
  const SECTION_RESULTS = SECTION.querySelectorAll('.task__result');

  SECTION_INPUTS.forEach(input => input.value = '');
  SECTION_RESULTS.forEach(result => result.innerHTML = '');
}