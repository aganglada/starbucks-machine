import express from 'express'

import render from './services/render'
import cache from './services/cache';
import api from './services/api'

const app = express()

app.get('/', cache(10), render)
app.use('/api', api)

app.listen(8080)

console.log('App running at http://localhost:8080/')
