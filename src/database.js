const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error('err'));
