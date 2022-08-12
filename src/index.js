module.exports = function check(str, bracketsConfig) {
  // your solution
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        str[i] === bracketsConfig[j][0] &&
        str[i + 1] === bracketsConfig[j][1]
      ) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i -= 2;
      }
    }
  }
  console.log(!str.length);
  return !str.length;
};
