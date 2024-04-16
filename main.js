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
    <p>${number} is equivalent to ${convert(number).toHex} in Hexidacimal <br>
    and ${number} is also equivalent to ${convert(number).toOct} in Octal <br>
    while ${number} is also equivalent to ${convert(number).toBin} in Binary</p>
    `);
}

function convert(number){

    function numFloor(dividend,divisor){
        if (dividend < divisor){
            return 0;
        }
        return 1 + numFloor(dividend - divisor, divisor);
    }

    function binary(num){
        if (num == 0) return '0';
        if (num == 1) return '1';
        const quotient = numFloor(num, 2);
        const remainder = num % 2;
        return binary(quotient) + remainder;
    }

    function octal(num){
        if (num == 0) return '0';
        if (num < 8) return num + '';
        const quotient = numFloor(num, 8);
        const remainder = num % 8;
        return octal(quotient) + remainder;
    }

    function hexadecimal(num){
        const hexChars = '0123456789ABCDEF';
        if (num == 0) return '0';
        if (num < 16) return hexChars[num];
        const quotient = numFloor(num, 16);
        const remainder = num % 16;
        return hexadecimal(quotient) + hexChars[remainder];
    }



    return {
        toBin:binary(number),
        toOct:octal(number),
        toHex:hexadecimal(number)
    }
}