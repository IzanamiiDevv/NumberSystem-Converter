/*
Asynchronous activity relative to Javascript Function:

Design a Web Page that will let the user input any number. Using Javascript Function, write the code that will convert the inputted number by the user into different number system such as binary, octal, and hexadecimal. the output may look like what is showing in the video clip. Take a video of yourself while doing the writing the code and executing it. then post it in any social media with the tagline "Asynchronous Activity in Computer Programming: Learning Javascript Function". tag me to check your output
*/

// 2:binary
// 8:Octal
// 16:Hexidacimal

let input = parseFloat(prompt("Type a valid number"));


/*
for (let i = 0; isNaN(input); i++) {
   input = parseFloat(prompt("Type a valid number"));
}
*/

display(input);

function display(number) {
    document.write(`
    <p>${number} is equivalent to ${decimalToHexadecimal(number)} in Hexidacimal <br>
    and ${number} is also equivalent to ${decimalToOctal(number)} in Octal <br>
    while ${number} is also equivalent to ${decimalToBinary(number)} in Binary</p>
    `);
}

function integerDivision(dividend, divisor) {
    if (dividend < divisor) return 0;
    return 1 + integerDivision(dividend - divisor, divisor);
}

function decimalToBinary(number) {
    if (number == 0) return '0';
    if (number == 1) return '1';
    const quotient = integerDivision(number, 2);
    const remainder = number % 2;
    return decimalToBinary(quotient) + remainder;
}

function decimalToOctal(number) {
    if (number == 0) return '0';
    if (number < 8) return number.toString();
    const quotient = integerDivision(number, 8);
    const remainder = number % 8;
    return decimalToOctal(quotient) + remainder;
}

function decimalToHexadecimal(number) {
    const hexChars = '0123456789ABCDEF';
    if (number == 0) return '0';
    if (number < 16) return hexChars[number];
    const quotient = integerDivision(number, 16);
    const remainder = number % 16;
    return decimalToHexadecimal(quotient) + hexChars[remainder];
}