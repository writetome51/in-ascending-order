import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';
import {hasValue} from '@writetome51/has-value-no-value';


export function inNumericOrder(numbers) {
	errorIfLengthIsZero(numbers);

	let i = 0;
	while (hasValue(numbers[i + 1])) {
		errorIfNotFiniteNumber(numbers[i]);

		if (numbers[i] > numbers[i + 1]) return false;
		++i;
	}
	return true;
}
