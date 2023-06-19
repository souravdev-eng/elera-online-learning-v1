export function addLeadingZero(number: number) {
    if (number >= 1 && number <= 9) {
        return '0' + number;
    } else {
        return number.toString(); // Return the number as a string without leading zero
    }
}