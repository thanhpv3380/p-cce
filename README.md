## CONCURRENCY PROCESSING

This package provides a solution for processing concurrent asynchronous tasks.

## Installing

Using npm:

```bash
npm install p-ccr
```

Using yarn:

```bash
yarn add p-ccr
```

## Usage

```javascript
const { processConcurrency } = require("p-ccr");

processConcurrency({
  // `items`: List of input items that will be passed as parameters to the function
  items: [1, 2, 3, 4, 5],

  // `func`: Processing function to handle each item
  func: item => {
    // Your code here to process each item
  },

  // `concurrency`: Number of items to process concurrently
  concurrency: 2
});
```
