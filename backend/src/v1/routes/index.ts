import Router from 'express'

import { PathNotFound, errHandler } from '../middlewares/errHandler';
import { validateRequest } from '../middlewares/requestValidation';
import { storeContact, updateContact } from '../controller';

export const router = Router();
router.post('/store', validateRequest, storeContact);
router.patch('/update', updateContact);
router.use(PathNotFound)
router.use(errHandler)