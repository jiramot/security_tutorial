import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('login')
})

router.post('/', async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    if (username == "foo@bar.com" && password == "P@ssw0rd") {
        res.cookie("username", username)
        res.redirect("/dashboard")
    } else {
        res.render('login', {error: true});
    }
})
export default router