# inNumericOrder(numbers): boolean

# notInNumericOrder(numbers): boolean

Each item in `numbers` must be of type 'number'.

## Examples
```
inNumericOrder([-20.2, -5.4, 10.2, 11]); // --> true

inNumericOrder([-1.023, -1.021, 0.222, 0.223]); // --> true

notInNumericOrder([-10, 5, 10, -11]); // --> true

notInNumericOrder([1, -5, 10, 11]); // --> true
```

## Installation
`npm i  @writetome51/in-numeric-order`

## Loading
```
// if using TypeScript:
import { inNumericOrder, notInNumericOrder} from '@writetome51/in-numeric-order'; 
// if using ES5 JavaScript:
var inNumericOrder = require('@writetome51/in-numeric-order').inNumericOrder;
var notInNumericOrder = require('@writetome51/in-numeric-order').notInNumericOrder;
```
