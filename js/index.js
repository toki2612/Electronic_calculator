var myinput = document.getElementById("myinput"); // number which shows up on the calculator display after typing
var expression = document.getElementById("expression"); // the whole expression to be calculated
var actions = document.getElementsByClassName("action"); // set of actions
var clicked = document.getElementsByClassName("digit"); // set of digits including dot
var result = 0; //stores result of expression
var action = ''; //stores last clicked action
var actionPressed = 0; //equals to 1, if +-*/ was pressed
var equalPressed = 0; //equals to 1, if = was pressed

// "AC" (All clear) button functionality
document.getElementById('AC').addEventListener('click', function() {
  myinput.value = '';
  expression.value = '';
  result = 0;
})

// "CE" (Clear entry) button functionality
document.getElementById('CE').addEventListener('click', function() {
  expression.value = expression.value.slice(0, -myinput.value.length);
  myinput.value = '';  
})

// Equals button functionality
document.getElementById('equals').addEventListener('click', function(){
  result = eval(expression.value);
  if (result.toString().length > 12) {
    myinput.value = result.toFixed(12);
    expression.value = result.toFixed(12);
  } else {
    myinput.value = result;
    expression.value = result;
  }
  actionPressed = 0;
  equalPressed = 1;
  console.log(result);
})

// This functions describes what happens when clicking on digits
function clickDigit(digits) {
  for (var i = 0; i < digits.length; i++) {
    digits[i].addEventListener ('click', function() {
      if (actionPressed == 1) {
        myinput.value = '';
        actionPressed = 0;
      }
      
      if (equalPressed == 1) {
        myinput.value = '';
        expression.value = '';
        result = 0;
      }
      
      myinput.value += this.innerHTML;
      expression.value += this.innerHTML;
      console.log(expression.value);
      equalPressed = 0;
    });
  }
}


// This function describes what happens when clicking on actions
function clickAction (arr) {
  for (var j = 0; j < arr.length; j++) {
    arr[j].addEventListener('click', function() {
      if (actionPressed == 1) {
        expression.value = expression.value.slice(0, -1);
      }     
      
      if (equalPressed == 1) {
        expression.value = result;
      }
      
      action = this.innerHTML;
      expression.value += action;
      console.log(expression.value);
      actionPressed = 1;
      equalPressed = 0;
    });
  }
}

clickDigit(clicked);
clickAction(actions);