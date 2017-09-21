module.exports = function check(str, bracketsConfig) {

  var wichBrackets = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    var temporary = bracketsConfig[i][0] + bracketsConfig[i][1];
    wichBrackets.push(temporary);
  }

  searchBrackets();
  
  if (str.length > 0) {
    return false;
  } else {
    return true;
  }

  function searchBrackets() {
    for (var j = 0; j < wichBrackets.length; ) {
      
      if (str.indexOf(wichBrackets[j]) !== -1) {
        var index = str.indexOf(wichBrackets[j]);
        str = str.substring(0, index) + str.slice(index+2);
        j = 0;
      } else if (str.indexOf(wichBrackets[j]) === -1) {
        j++;
      }
    }
  }
}