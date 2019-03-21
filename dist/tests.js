"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1
if (index_1.inNumericOrder([1, -5, 10, 11]))
    console.log('test 1 failed');
else
    console.log('test 1 passed');
// Test 2
if (index_1.inNumericOrder([-10, 5, 10, -11]))
    console.log('test 2 failed');
else
    console.log('test 2 passed');
// Test 3
if (index_1.inNumericOrder([1, 5, 10, 11]))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (index_1.inNumericOrder([-20, -5, 10, 11]))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
if (index_1.inNumericOrder([-20.2, -5.4, 10.2, 11]))
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
if (index_1.inNumericOrder([-1.023, -1.021, 0.222, 0.223]))
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
if (index_1.inNumericOrder([-1.023, -1.024, 0.222, 0.223]))
    console.log('test 7 failed');
else
    console.log('test 7 passed');
// Test 8
if (index_1.inNumericOrder([1]))
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
var errorTriggered = false;
try {
    index_1.inNumericOrder([1, 2, '', 4, 6]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
errorTriggered = false;
try {
    index_1.inNumericOrder(1, 2);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11
errorTriggered = false;
try {
    index_1.inNumericOrder([]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 11 passed');
else
    console.log('test 11 failed');
// Test 12
errorTriggered = false;
try {
    index_1.inNumericOrder();
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 failed');
