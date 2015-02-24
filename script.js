var shift = document.querySelector('input');
var increase = document.querySelector('.increase');
var decrease = document.querySelector('.decrease');

var input = document.querySelector('.input');
var output = document.querySelector('.output');

input.oninput = cipherText;

var to = document.querySelector('.to');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

increase.onclick = increaseShift;
decrease.onclick = decreaseShift;

increase.onkeydown = buttonKeypress;
decrease.onkeydown = buttonKeypress;

shift.onchange = shiftChange;

function shiftChange () {
  
  updateThings();
  
}

function buttonKeypress (event) {
  
  // enter or space key
  if ((event.which === 13) || (event.which === 32)) {
    event.preventDefault();
    window[event.target.id+'Shift']();
  }
  
}

function increaseShift () {
  
  if (shift.value < 25) {
    shift.value++;
  } else {
    shift.value = 0;
  }
  updateThings();
  
}

function decreaseShift () {
  
  if (shift.value > 0) {
    shift.value--;
  } else {
    shift.value = 25;
  }
  updateThings();
  
}

function updateThings () {
  
  updateExample();
  cipherText();
  
}

function updateExample () {
  
  to.textContent = alphabet[ shift.value ];
  
}

function cipherText () {
  
  var ciphered = '';
  
  var shiftlength = shift.value;
  var inputtext = input.value;
      
  for (var i = 0; i < inputtext.length; i++) {
    
    var char = inputtext[i];
    
    var isLowercase = char === char.toLowerCase();
        
    var index = alphabet.indexOf(char.toUpperCase());
        
    if (index > -1) {
      
      console.log(char + ' - ' + isLowercase + ' + ' + char.toLowerCase() + ' . ' + index);
      
      var newindex = index + Math.floor(shiftlength);
      
      if (newindex > 25) {
        newindex = newindex - 26;
      }
      
      char = alphabet[ newindex ];
            
      if (isLowercase) { char = char.toLowerCase() };
      
    }
        
    ciphered = ciphered.concat(char);
        
  }
    
  output.value = ciphered;
  
}