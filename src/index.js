module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map(el => el.join(''));
  for (let i = 0; i < brackets.length; i++){
    if (str.includes(brackets[i])){
      str = str.replace(brackets[i],"");
      i = -1;
    }
  }
  if(str)
    return false;
  else
    return true;
}
