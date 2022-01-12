const t1plus = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const t10plus = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const t100plus = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

module.exports = function toReadable(number) {
  // min 0 max 999
  if (number === 0) return t1plus[0];
  
  const s = number.toString();
  const len = s.length;
  var str = "";
  for (let i = 0; i < len; i++) {
    if ((len - i) % 3 == 2) {
      if (s[i] == "1") {
        str += t10plus[Number(s[i + 1])] + " ";
        i++;
      } else if (s[i] != 0) {
        str += t100plus[s[i] - 2] + " ";
      }
    } else if (s[i] != 0) {
      str += t1plus[s[i]] + " ";
      if ((len - i) % 3 == 0) str += "hundred ";
    }
  }

  return str.trim();
};
