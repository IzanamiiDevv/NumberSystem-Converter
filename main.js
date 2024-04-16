let input = parseFloat(prompt("Type a valid number"));

function convert(number){

    function numFloor(dividend,divisor){
        if (dividend < divisor) return 0;
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

document.write(`
<div align="center">
<h1>Asynchronous activity relative to Javascript Function:</h1>
<p>
Design a Web Page that will let the user input any number. Using Javascript Function,<br>
write the code that will convert the inputted number by the user into different number system<br>
such as binary, octal, and hexadecimal.
</p>
<p align="center">
    ${input} is equivalent to ${convert(input).toHex} in Hexidacimal <br>
    and ${input} is also equivalent to ${convert(input).toOct} in Octal <br>
    while ${input} is also equivalent to ${convert(input).toBin} in Binary
</p>
<table border="2" align="center">
    <tr>
        <td>Decimal</td>
        <td>Binary</td>
        <td>Octal</td>
        <td>Hexidecimal</td>
    </tr>
    <tr>
        <td>${input}</td>
        <td>${convert(input).toBin}</td>
        <td>${convert(input).toOct}</td>
        <td>${convert(input).toHex}</td>
    </tr>
</table>
</div>
`);