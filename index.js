const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    if (Math.floor(Math.random() * 3) > 1) {
        setTimeout(function(){ 
            res.send('Hello World random!')
        }, 55000);
    } else {
        res.send('Hello World!')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})