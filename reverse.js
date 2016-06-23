
// one line version
reverseString = function(string) {
  return ( string.length === 1 ? string : string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0)) )
}

// two line version
reverseString = function(string) {

  if (string.length === 1) {
    return string
  }

  return string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0))
}


// test cases
reverseString('dream');
reverseString('verylongstringthatwillneverend')
