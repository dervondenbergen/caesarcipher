const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function cipher (text, shift, direction) {
  
  var ciphered = '';
      
  for (var i = 0; i < text.length; i++) {
    
    var char = text[i];
    
    var isLowercase = char === char.toLowerCase();
        
    var index = ALPHABET.indexOf(char.toUpperCase());
        
    if (index > -1) {
        
      var newindex = index + shift;
      
      if (newindex > 25) {
        newindex = newindex - 26;
      }
        
      char = ALPHABET[ newindex ];
            
      if (isLowercase) { char = char.toLowerCase() };
      
    }
        
    ciphered = ciphered.concat(char);
        
  }
  
  return ciphered;
  
}
