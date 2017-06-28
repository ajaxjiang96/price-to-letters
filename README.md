# price
A JavaScript toll that converts price number to letters

## Usage
```javascript
let c = require('./convert');
c.spell(1); // 'One Dollar'
```

works on two decimal places, up to 999 trillion (`c.spell(999999999999999)`)

## TODOs
- [ ] add French localization;
- [ ] space handling;

## Credits
This tool is based on a piece of visual basic code provided by Microsoft for Excel [(source)](https://support.microsoft.com/en-in/help/213360/how-to-convert-a-numeric-value-into-english-words-in-excel). Created by [Jiacheng Jiang](http://ajaxjiang96.com).
