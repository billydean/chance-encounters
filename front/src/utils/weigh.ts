/** 'weigh' modifies an existing cache of possible outputs prior to its being 'rolled' (cf roll.js)
 * 
 * simple example:
 * 1: cache of possible education outcomes --> initializes with even distribution
 * { 
 *     good_education: 1,
 *     bad_education: 1,
 *     no_education: 1,
 * }
 * 2: having a bad childhood makes certain outcomes more likely, applying a weight of 1
 * {
 *     good_education: 1,
 *     bad_education: 2,
 *     no_education: 2,
 * }
 * 
 * @param {Object} inputObject raw -> if weigh is applied, options rolled only after weighing
 * @param {integer} weight to be added to any selected options from inputObject
 * @param  {...string} variables selected options to weight
 */

// export function weigh (inputObject, weight, ...variables) {
//     for (let variable of variables) {
//         if (variable in inputObject) {
//             inputObject[variable] += weight;
//         }
//     }
// }

export {};