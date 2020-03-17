module.exports = function toReadable (number) {
  let oneDigitNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let twoDigitNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let readableNumber = '';
  let len = String(number).length;

  let readOneDigitNumber = function(n) {
    readableNumber += oneDigitNumbers[n];
  }

  let readTwoDigitNumber = function(n) {
    if (n < 20) {
        readableNumber += twoDigitNumbers[n - 10];
    } else if (n % 10 == 0) {
        readableNumber += tens[n / 10 - 2];
    } else {
        readableNumber += tens[Math.trunc(n / 10 - 2)] + ' ' + oneDigitNumbers[n % 10];
    }
}


  if (len == 1) readOneDigitNumber(number);

  if (len == 2) {
    readTwoDigitNumber(number);
  }

  if (len == 3) {    
    readableNumber += oneDigitNumbers[Math.trunc(number / 100)] + ' hundred ';    
    if (number % 100 > 9) readTwoDigitNumber(number % 100);
    if (number % 100 < 10 && number % 100 > 0) readOneDigitNumber(number % 100); 
    if (number % 100 == 0) readableNumber = oneDigitNumbers[number / 100] + ' hundred';   
  }

  return readableNumber;
}
