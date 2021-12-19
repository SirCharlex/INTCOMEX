const{Router} = require('express')

const UserRoutes = require('./users')
const router = Router()

router.use('/users', UserRoutes)

module.exports = router;