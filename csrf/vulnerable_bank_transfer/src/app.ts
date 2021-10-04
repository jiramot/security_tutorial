import express, {NextFunction, Request, Response} from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import index from './routes'
import login from './routes/login'
import user from './routes/dashboard'
import transfer from './routes/transfer'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'pug')

app.use('/favicon.ico', express.static('public/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', index)
app.use('/login', login)
app.use('/dashboard', user)
app.use('/transfer', transfer)

app.use((req, res, next) => {
    next(new Error('Not Found'))
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).render('error', {
        message: err.message,
        error: {}
    })
})

const listenOn = Number(process.env.PORT || 3000)
app.listen(listenOn, () => {
    console.log(`Listening on http://0.0.0.0:${listenOn}`)
})
