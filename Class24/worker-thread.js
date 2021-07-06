const threadCount = 3;
const generatePrime = require('./prime-calculation.js');

console.time("Prime calculation using threads"+threadCount)
generatePrime(threadCount).then(function(res) {
  console.timeEnd("Prime calculation using threads"+threadCount)
})