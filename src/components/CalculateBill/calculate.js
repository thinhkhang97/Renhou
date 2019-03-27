
export default function calculateElectric(input, unit, limit) {
    let rest = input;
    let output = 0;
    for (let i = 0; i < limit.length; i++) {
        if (rest >= limit[i]) {
            output += unit[i] * limit[i];
            rest -= limit[i];
        }
        else {
            output += unit[i] * rest;
            rest = 0;
            break;
        }
    }
    if (rest > 0)
        output += rest * unit[unit.length - 1];
    return output;
}