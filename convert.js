/* convert.js
 * version : 0.0.1
 * author : Jiacheng Jiang
 */

module.exports = {

  spell: (num) => {
    if (typeof(num) === "number") {
      let dollars = "", cents = "", temp;
      let decimalPlace, count;
      let numberStr = ("" + num).trim();
      let place = [ "", "", " Thousand ", " Million ", " Billion ", " Trillion ", "", "", "", ""]
      decimalPlace = numberStr.indexOf('.');

      if (decimalPlace >= 0) {
        cents = helpers.getTens(numberStr.substr(decimalPlace + 1));
        numberStr = numberStr.substr(0, decimalPlace);
      }

      count = 1;

      while (numberStr != "") {
        temp = helpers.getHundreds(numberStr.substr((numberStr.length - 3) < 0 ? 0 : (numberStr.length - 3), numberStr.length))
        if (temp != "") {
          dollars = temp + place[count] + dollars;
        }

        if (numberStr.length > 3) {
          numberStr = numberStr.substr(0, (numberStr.length - 3) < 0 ? 0 : (numberStr.length - 3))
        } else {
          numberStr = ""
        }
        count ++;
      }

      switch (dollars) {
        case "": dollars = "No Dollars"; break;
        case "One": dollars = "One Dollar"; break;
        default: dollars = dollars + " Dollars";
      }

      switch (cents) {
        case "": cents = ""; break;
        case "One": cents = " and One Cent"; break;
        default: cents = " and " + cents + " Cents";
      }

      return (dollars + cents).replace(/ +/g, " ");

    }
    return num;
  },
}

let helpers = {
  toHundreds: (number) => {
    number = "" + number;

    switch(number.length) {
      case 1: return "00" + number; break;
      case 2: return "0" + number; break;
      default: return number;
    }
  },

  getHundreds: (number) => {
    let result = "";
    if (eval(number) == 0) {
      return "";
    }

    number = helpers.toHundreds(number);
    if (number[0] != "0") {
      result = helpers.getDigit(number[0]) + " Hundred ";
    }

    if (number[1] != "0") {
      result += helpers.getTens(number.substr(1, 2));
    } else {
      result += helpers.getDigit(number[2]);
    }

    return result;
  },

  getTens: (tensText) => {
    let result = "";

      if (tensText[0] == 1) {
        switch (eval(tensText)) {
          case 1: result = 'Ten'; break;
          case 10: result = 'Ten'; break;
          case 11: result = 'Eleven'; break;
          case 12: result = 'Twelve'; break;
          case 13: result = 'Thirteen'; break;
          case 14: result = 'Fourteen'; break;
          case 15: result = 'Fifteen'; break;
          case 16: result = 'Sixteen'; break;
          case 17: result = 'Seventeen'; break;
          case 18: result = 'Eighteen'; break;
          case 19: result = 'Nineteen'; break;
        }
      } else {
        switch (eval(tensText[0])) {
          case 2: result = "Twenty "; break;
          case 3: result = "Thirty "; break;
          case 4: result = "Forty "; break;
          case 5: result = "Fifty "; break;
          case 6: result = "Sixty "; break;
          case 7: result = "Seventy "; break;
          case 8: result = "Eighty "; break;
          case 9: result = "Ninety "; break;
        }
        return result + helpers.getDigit(tensText[1]);
      }
      return result;
  },

  getDigit: (digit) => {
    switch (eval(digit)) {
      case 1: return "One"; break;
      case 2: return "Two"; break;
      case 3: return "Three"; break;
      case 4: return "Four"; break;
      case 5: return "Five"; break;
      case 6: return "Six"; break;
      case 7: return "Seven"; break;
      case 8: return "Eight"; break;
      case 9: return "Nine"; break;
      default: return "";
    }
  }
}
