This example demonstrates a common error in DApps that involves forgetting to use the 'await' keyword when calling asynchronous functions interacting with the blockchain.  The function `getBalance` is asynchronous, and therefore, needs to be awaited before its return value can be used.  Failure to do so will result in a Promise object being logged instead of the actual balance.