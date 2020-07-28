import { inNumericOrder } from './index.js';

// Test 1
if (inNumericOrder([1, -5, 10, 11]))
    console.log('test 1 FAILED');
else
    console.log('test 1 passed');
// Test 2
if (inNumericOrder([-10, 5, 10, -11]))
    console.log('test 2 FAILED');
else
    console.log('test 2 passed');
// Test 3
if (inNumericOrder([1, 5, 10, 11]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
if (inNumericOrder([-20, -5, 10, 11]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
if (inNumericOrder([-20.2, -5.4, 10.2, 11]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6
if (inNumericOrder([-1.023, -1.021, 0.222, 0.223]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7
if (inNumericOrder([-1.023, -1.024, 0.222, 0.223]))
    console.log('test 7 FAILED');
else
    console.log('test 7 passed');
// Test 8
if (inNumericOrder([1]))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
let errorTriggered = false;
try {
    inNumericOrder([1, 2, '', 4, 6]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');

// Test 10
errorTriggered = false;
try {
    inNumericOrder(1, 2);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
errorTriggered = false;
try {
    inNumericOrder([]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12
errorTriggered = false;
try {
    inNumericOrder();
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
