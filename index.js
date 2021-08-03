const express = require('express')
const app = express()
const port = 3000
var os = require('os-utils');



app.get('/', (req, res) => {
    if (Math.floor(Math.random() * 3) > 1) {
        setInterval(() => {
            os.cpuUsage(function(v){
                res.send('CPU Usage (%): ' + v)
            });
        }, 60000)
    } else {
        res.send('Hello World!')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})