# inNumericOrder(numbers): boolean

Each item in `numbers` must be of type 'number'.

## Examples
```
inNumericOrder([1,2,3,4]); // --> true

inNumericOrder([-1.03, -1.02, 0.222, 0.223]); // --> true

inNumericOrder([-10, 5, -11]); // --> false

inNumericOrder([-10, '', -11]);
// --> Error: "Input must be a finite number of type 'number'"
```

## Installation
`npm i  @writetome51/in-numeric-order`

## Loading
```js
import { inNumericOrder } from '@writetome51/in-numeric-order'; 
```
