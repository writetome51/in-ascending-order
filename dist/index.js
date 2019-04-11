"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function notInNumericOrder(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var i = 0;
    while ((typeof numbers[i + 1]) !== 'undefined') {
        error_if_not_finite_number_1.errorIfNotFiniteNumber(numbers[i]);
        error_if_not_finite_number_1.errorIfNotFiniteNumber(numbers[i + 1]);
        if (numbers[i] > numbers[i + 1])
            return true;
        ++i;
    }
    return false;
}
exports.notInNumericOrder = notInNumericOrder;
function inNumericOrder(numbers) {
    return (!(notInNumericOrder(numbers)));
}
exports.inNumericOrder = inNumericOrder;
