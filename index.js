const express = require('express')
const app = express()
const port = 3000
var os = require('os-utils');


var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

app.get('/', (req, res) => {
    console.log("-------------------------");
    os.cpuUsage(function(v){
        console.log( 'CPU Usage (%): ' + v );
    });
    if (Math.floor(Math.random() * 3) > 1) {
        fibonacci_series(250)
        res.send('Hello World fibonacci! ')
        
    } else {
        res.send('Hello World!')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})