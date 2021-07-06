const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

let primes = [];
var min = 2;
var range = 6;

function generatePrime(start, range) {
  let isPrime = true
  let end = start + range
  for(let i = start; i< end; i++ ) {
    for(let j = start; j < Math.sqrt(i); j++) {
      if( i % j === 0 && i!=j) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      // console.log(i)
      primes.push(i);
    }
    isPrime = true;
  }



  // threads
  if(isMainThread) {
    module.exports = function (threadCount) {
      return new Promise(function(resolve, reject) {
        const max = 100000000;
        const threads = new Set();
        const range = Math.ceil((max-min)/ threadCount);

        for(let i = 0; i< threadCount - 1; i++ ) {
          // creation of threads
          const tempStart = start;
          threads.add(new Worker(__filename, ({workerData: {start: tempStart, range}})))
          start += range
        }
        // remaining
        threads.add(new Worker(__filename, ({workerData: {start, range: range + ((max - min + 1)%threadCount)}})))

        // running of threads
        for (let worker of threads) {
          worker.on('error', (err) => {
            reject(err)
          })
          worker.on('exit', () => {
            threads.delete(worker);
            console.log("Exiting")
            if(threads.size == 0) {
              resolve(true);
            }
          })
          worker.on("message", (msg) => {
            //adding to result
            primes = primes.concat(msg)
          })
        }
      })
    }
  } else {
    generatePrime(workerData.start, workerData.range);
    parentPort.postMessage(primes);
  }
}

generatePrime(min, range);

// console.log(primes)