import express from 'express'

const router = express.Router()

router.get('/', function (req, res, next) {
    const username = req.cookies.username
    if (username == null) {
        res.redirect("/login")
    }
    res.render('dashboard', {username: username});
});


export default router