const express = require('express')
const app = express()
const port = 3000
var os = require('os-utils');



app.get('/', (req, res) => {
    os.cpuUsage(function(v){
    if (Math.floor(Math.random() * 3) > 1) {
        setTimeout(() => {
                res.send('CPU Usage Inside (%): ' + v)
        }, 60000)
    } else {
        res.send('CPU Usage (%): ' + v)
    }
});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})