import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('transfer')
})

router.get('/success', (req, res, next) => {
    res.send('respond with a resource');
})

router.post('/', async (req, res, next) => {
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