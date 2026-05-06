import { Router } from 'express'

import { authMiddleware } from '../middlewares/index.js'

import {
    addReviewHandler,
    getUserReviewHandler,
    getReviewHandler,
    getReviewsHandler,
    removeReviewHandler,
    searchReviewsByTitleHandler,
    modifyReviewHandler

} from './handlers/index.js'

export const reviewRouter = new Router()

reviewRouter.post('/', authMiddleware, addReviewHandler)
reviewRouter.get('/', authMiddleware, getReviewsHandler)
reviewRouter.get('/search', authMiddleware, searchReviewsByTitleHandler)
reviewRouter.get('/searchABook/:reviewId', getUserReviewHandler)
reviewRouter.get('/:reviewId', authMiddleware, getReviewHandler)
reviewRouter.delete('/:reviewId', authMiddleware, removeReviewHandler)
reviewRouter.put('/:reviewId', authMiddleware, modifyReviewHandler)