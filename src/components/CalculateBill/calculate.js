
export default function calculateElectric(input) {
    const unit = [1678, 1734, 2014, 2536, 2834, 2927];
    const limit = [50, 50, 100, 100, 100, 100];
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