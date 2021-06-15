const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const config = require('config')

//Connect bcrypt library
const bcrypt = require('bcryptjs')

//Validate Data
const {check, validationResult} = require('express-validator')

//jsonwebtoken
const jwt = require('jsonwebtoken')

//******* */
//***example router */
//router.post('/register', async (req, res) => { })
//
//****** */

// /api/auth/register
router.post(
  '/register',
  [
   check('email', 'email incorrect').isEmail(),
   check('password', 'Min password size 6 simbols').isLength({min: 6})
  ],
   async (req, res) => {
  try {

    //log for test. For watch body in the console
//console.log('Body:', req.body)

const errors = validationResult(req)
if (!errors.isEmpty()){
  return res.status(400).json({
    errors: errors.array(),
    message: 'Data is incorrect'
  })
}

const {email, password} = req.body //Приходит с Front-End

const candidate = await User.findOne({ email })

if (candidate) {
    return res.status(400).json({ message: 'This User already exists'})
}

//Heshed User password
//https://www.npmjs.com/package/bcryptjs
// npm i bcryptjs
const hashedPassword = await bcrypt.hash(password, 12)
const user = new User({ email, password: hashedPassword })

//wait for user save
await user.save()

res.status(201).json({ message: 'User created' })

  } catch(e) {
      res.status(500).json( {message: 'Error. Please try again' })
  }
})

// /api/auth/login
router.post('/login',
[
  check('email', 'Please, enter correct email').normalizeEmail().isEmail(),
  check('password', 'Enter password').exists()
 ],
 async (req, res) => {

  try {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array(),
        message: 'Data is incorrect'
      })
    }
const {email, password} = req.body
const user = await User.findOne({email})

if (!user) {
  return res.status(400).json({message: 'User not found'})
}

const isMatch = await bcrypt.compare(password, user.password)

if (!isMatch) {
  return res.status(400).json({ message: 'Incorrext password. Please, try again'})
}

const token = jwt.sign(
  { userId: user.id },
  config.get('jwtSecret'),
  { expiresIn: '1h' }
)

res.json({ token , userId: user.id})

      } catch(e) {
          res.status(500).json( {message: 'Error. Please try again' })
      }



})

module.exports = router
