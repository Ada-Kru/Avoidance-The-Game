const scores = require('./scores');
module.exports = app => {
    app.use('/scores', scores);
};
