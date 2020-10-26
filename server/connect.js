const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dropisle')
.then(() => console.log('Connected to mongoDB...'))
.catch(err => console.error('Could not connect to mongoDb...',err))