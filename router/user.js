const router = require('express').Router()
const {getUser, createUser, deleteUser} = require('../controllers/user')
const authentication = require('../middlewares/authentication')

router.get('/',authentication, getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)

module.exports = router