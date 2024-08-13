import express from 'express'
import authRouter from './Routers/authRouter.js'
import accountRouter from './Routers/accountRouter.js'


const app = express()

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000')
})