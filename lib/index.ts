import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


export function notInNumericOrder(numbers): boolean {
	errorIfNotPopulatedArray(numbers);
	let i = 0;
	while ((typeof numbers[i + 1]) !== 'undefined') {

		errorIfNotFiniteNumber(numbers[i]);
		errorIfNotFiniteNumber(numbers[i + 1]);

		if (numbers[i] > numbers[i + 1]) return true;
		++i;
	}
	return false;
}


export function inNumericOrder(numbers): boolean {
	return (!(notInNumericOrder(numbers)));
}
