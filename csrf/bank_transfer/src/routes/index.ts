import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
    const username = req.cookies.username
    if (username != null) {
        res.redirect('/dashboard')
    } else {
        res.redirect('/login')
    }
})

export default router