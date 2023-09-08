const express = require('express')

const db = require('./models/index')
// const ApiRoutes = require('./routes/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', ApiRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    db.sequelize.sync().then(() => {
        console.log('DB connected');
    })
    console.log(`Server is running on PORT ${PORT}`);
})