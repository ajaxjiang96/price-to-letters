# price-to-letters
![Publish Status](https://github.com/ajaxjiang96/price-to-letters/actions/workflows/npm-publish.yml/badge.svg)
[![npm version](https://badge.fury.io/js/price-to-letters.svg)](https://badge.fury.io/js/price-to-letters)
![Downloads](https://img.shields.io/npm/dt/price-to-letters)

A JavaScript tool that converts price number to letters.

## Usage

run `npm install price-to-letters`, and then

```javascript
let c = require('price-to-letters');
c.spell(1); // 'One Dollar'
```

works on two decimal places, up to 999 trillion (`c.spell(999999999999999)`).

## TODOs
- [ ] add French localization;
- [x] space handling;

## Credits
This tool is based on a piece of visual basic code provided by Microsoft for Excel [(source)](https://support.microsoft.com/en-in/help/213360/how-to-convert-a-numeric-value-into-english-words-in-excel). Created by [Jiacheng Jiang](http://ajaxjiang96.com).
