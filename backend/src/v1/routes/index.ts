import Router from 'express'

import { PathNotFound, errHandler } from '../middlewares/errHandler';
import { validateRequest } from '../middlewares/requestValidation';
import { populateContacts, removeContact, storeContact, updateContact } from '../controller';

export const router = Router();
router.post('/store', validateRequest('storing'), storeContact);
router.patch('/update', validateRequest('update'), updateContact);
router.get('/contacts', populateContacts)
router.delete('/contacts', removeContact)
router.use(PathNotFound)
router.use(errHandler)