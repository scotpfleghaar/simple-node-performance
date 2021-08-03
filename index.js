const express = require('express')
const app = express()
const port = 3000
var os = require('os-utils');

const iterations = 250;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

function doPointlessComputationsWithBlocking() {
  var primes = calculatePrimes(iterations, multiplier);
}


app.get('/', (req, res) => {
    os.cpuUsage(function(v){
        console.log('CPU Usage (%): ' + (v*100).toFixed(2))
    });
    if (Math.floor(Math.random() * 3) > 1) {
        doPointlessComputationsWithBlocking()
        res.send('timeOut')
    } else {
        res.send('hello')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})