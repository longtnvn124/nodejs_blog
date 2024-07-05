const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');

app.use(morgan('combined'))
// app.use(logger('dev'));

app.get('/', (req, res) => {
    return res.send(`
        <h1>Hello World</h1>
        `);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

//127.0.0.1 - localhot