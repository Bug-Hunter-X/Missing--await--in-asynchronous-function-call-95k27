async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

const balance = await getBalance(); // 'await' keyword added
console.log(balance); // This will now log the actual balance