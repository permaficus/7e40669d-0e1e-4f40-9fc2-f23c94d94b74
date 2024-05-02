import Router from 'express'

import { PathNotFound, errHandler } from '../middlewares/errHandler';
import { validateRequest } from '../middlewares/requestValidation';
import { populateContacts, removeContact, storeContact, updateContact } from '../controller';

export const router = Router();
/**
 * @swagger
 * definitions:
 *  PayloadItems:
 *    type: object
 *    properties:
 *      firstName:
 *          type: string
 *          example: John
 *      lastName:
 *          type: string
 *          example: Smith
 *      email:
 *          type: string
 *          example: johnsmit@gmail.com
 *      phone:
 *          type: string
 *          example: 813-3939-939
 *      position:
 *          type: string
 *          example: CTO
 *    required:
 *      - firstName
 *      - lastName
 *      - email
 *      - phone
 *      - position         
 */
/**
 * @swagger
 * definitions:
 *  Payload:
 *    type: object
 *    properties:
 *       payload:
 *          type: array
 *          items:
 *            $ref: '#/definitions/PayloadItems'
 */
/**
 * @swagger
 * definitions:
 *  StoreResponse:
 *    type: object
 *    properties:
 *      status:
 *         type: string
 *         example: OK
 *      code:
 *         type: integer
 *         example: 200
 *      message:
 *         type: object
 *         properties:
 *             storing:
 *               type: string
 *               example: 1 contact
 */
/**
 * @swagger
 * '/api/v1/store':
 *   post:
 *     tags: [Store]
 *     summary: Add New Contact
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/definitions/Payload'
 *     responses:
 *       '200':
 *          description: Success Response
 *          content:
 *             application/json:
 *               schema:
 *                  $ref: '#/definitions/StoreResponse'
 *       '500':
 *          description: ERR_BAD_SERVICE
 *       '400':
 *          description: ERR_BAD_REQUEST
 *          
 */
router.post('/store', validateRequest('storing'), storeContact);
/**
 * @swagger
 * definitions:
 *  UpdateItems:
 *    type: object
 *    properties:
 *      id:
 *          type: string
 *          example: 66324f0b5b4d031251066730
 *      email:
 *          type: string
 *          example: johnsmit@exam.id
 *      phone:
 *          type: string
 *          example: 813-3434-939
 *      position:
 *          type: string
 *          example: CFO       
 */
/**
 * @swagger
 * definitions:
 *  UpdatePayload:
 *    type: object
 *    properties:
 *       payload:
 *          type: array
 *          items:
 *            $ref: '#/definitions/UpdateItems'
 */
/**
 * @swagger
 * definitions:
 *  UpdateResponse:
 *    type: object
 *    properties:
 *      status:
 *         type: string
 *         example: OK
 *      code:
 *         type: integer
 *         example: 200
 *      details:
 *         type: array
 *         items:
 *          $ref: '#/definitions/UpdateItems'
 */
/**
 * @swagger
 * '/api/v1/update':
 *   patch:
 *     tags: [Update]
 *     summary: Update List of Contacts
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/definitions/UpdatePayload'
 *     responses:
 *       '200':
 *          description: Success Response
 *          content:
 *             application/json:
 *               schema:
 *                  $ref: '#/definitions/UpdateResponse'
 *       '500':
 *          description: ERR_BAD_SERVICE
 *       '400':
 *          description: ERR_BAD_REQUEST
 */
router.patch('/update', validateRequest('update'), updateContact);
router.get('/contacts', populateContacts)
router.delete('/contacts', removeContact)
router.use(PathNotFound)
router.use(errHandler)