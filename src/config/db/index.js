const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/f8_education_dev',{
            usrNewUrlParSer:true,
            useUnifiedTopology:true
        });
        console.log('Connect DB Successfully !');
    } catch (error) {
        console.log('Connect DB Failure !');

    }
}

module.exports = { connect };
