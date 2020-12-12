const mongoose = require('mongoose');
const config = require('./config')

module.exports = () => {
    mongoose.set('useCreateIndex', true);
    const mongooseConnect = () => {
        let connecting = setTimeout(() => console.log('Connecting to DB...'.yellow), 1000);
        console.log(`config.db  : ${config.db}`);
        mongoose.connect(config.db, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
            .then(() => {
                clearTimeout(connecting);
                console.log('Connected to DB'.green);
            })
            .catch(err => {
                console.log(err);
                clearTimeout(connecting);
                console.log('Unable to connect to DB'.red);
                console.log('Retrying in 10 seconds'.yellow);
                setTimeout(mongooseConnect, 10 * 1000);
            });
    };
    mongooseConnect();
};