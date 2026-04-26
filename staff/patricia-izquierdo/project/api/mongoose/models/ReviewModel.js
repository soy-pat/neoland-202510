import { model } from 'mongoose'
import { reviewSchema } from '../schemas/index.js'

export const ReviewModel = model('Review', reviewSchema)