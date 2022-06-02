/**
 * Selects a random key from input object.
 * Input objects are initialized such that keys are weighed evenly.
 * 'roll' creates an array with an instance of [key] per weight (one by default)
 * Uses Math.random to pull from array
 */

export function roll (inputObject) {
    let arrayedOptions = [];
    for (let option in inputObject) {
        let count = 0;
        while (count < inputObject[option]) {
            arrayedOptions.push(option);
        }
    }
    let rando = Math.ceil(Math.random * arrayedOptions.length);
    return arrayedOptions[rando];
}