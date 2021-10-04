import express from 'express'
import csrf from 'csurf'

const router = express.Router()
const csrfProtection = csrf({cookie: true})

router.get('/', csrfProtection, (req, res, next) => {
    res.render('transfer', {
        csrfToken: req.csrfToken()
    })
})

router.get('/success', (req, res, next) => {
    res.send('respond with a resource');
})

router.post('/', csrfProtection, async (req, res, next) => {
    const username = req.cookies.username
    if (username != null) {
        const account = req.body.account
        const amount = req.body.amount
        res.render('transfer_success', {srcAccount: username, destAccount: account, amount: amount});
    } else {
        res.redirect("login")
    }

})

export default router