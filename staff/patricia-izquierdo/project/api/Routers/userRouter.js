import { Router } from 'express'

import { authMiddleware } from '../middlewares/index.js'

import {
    authenticateUserHandler,
    getMeHandler,
    getUserHandler,
    registerUserHandler,
    getUserReviewsHandler

} from './handlers/index.js'

export const userRouter = new Router()

userRouter.post('/', registerUserHandler)
userRouter.get('/me', authMiddleware, getMeHandler)
userRouter.post('/auth', authenticateUserHandler)
userRouter.get('/:userId', authMiddleware, getUserHandler)
userRouter.get('/:userId/reviews', getUserReviewsHandler)
