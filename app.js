//******************** */
//***Step-By-Step***** */
//******SERVER******** */
//1. Open New Folder: For example: "shooter-club-01"
//2. npm init -y  
//3. Root: Create new file: app.js
//4. npm install express mongoose
//5. npm install -D nodemon concurrently
//6. npm install config
//7. mkDir config. Create new file: default.json
//8. Edit package.json
//  - entry point (main): (index.js) app.js
//  - "scripts": {
//    "start": "node app.js",
//    "server": "nodemon app.js"
//     },
//9. require: express, mongoos, config. Connect to DB
//---------------------------------------------------
//11. Registered Routers. mkDir routes. Config Routers
//---------------------------------------------------
//12. Create Model. mkDir models
//---------------------------------------------------
//13. Validate Data. npm i express-validator
//14. npm install jsonwebtoken
//15. npm install shortid
//16. npm install --save-dev cross-env
//******************** */

//********CLIENT ********************* */
//****FRONT DEVELOPMENT*************** */
//1. npx create-react-app client
//2. Edit package.json
//  - entry point (main): (index.js) app.js after "server":
// - "client": "npm run start --prefix client"
// - "dev": "concurrently \"npm run server\" \"npm run client\""
//

//******Production prepare**** */
//npm run client:build
//
//

//Config App and DB
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

//Add middleware!!!

app.use(express.json( {extended: true} ))

//Config Routers
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

//Check Server
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

    } )
}

//Config Server
const PORT = config.get('port') || 5000

async function start() {
   try {
await mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
        })
app.listen(PORT, ()=> console.log(`Server has been started on port ${PORT}...`))
    } catch(e){
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}

start()

