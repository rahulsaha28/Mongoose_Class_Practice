const { DBConncetion } = require('./config/db.Config');

DBConncetion();

const app = require('./www/www');




// listening on port 5000
app.listen(5000, ()=>console.log(`http://localhost:5000`));