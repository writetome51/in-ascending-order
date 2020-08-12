import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';


export function inNumericOrder(numbers) {
	errorIfLengthIsZero(numbers);
	// Better to put this here than inside the loop:
	errorIfNotFiniteNumber(numbers[0]);

	let i = 0, length = numbers.length;
	while (++i + 1 <= length) {
		errorIfNotFiniteNumber(numbers[i]);

		if (numbers[i-1] > numbers[i]) return false;
	}
	return true;
}
