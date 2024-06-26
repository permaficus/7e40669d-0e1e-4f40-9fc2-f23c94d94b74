import { Model } from "../../model";
import { Request, Response, NextFunction } from 'express'

export const storeContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { payload } = req.body;
        const response: any = await Model.create(payload);
        res.status(200).json({
            status: 'OK',
            code: '200',
            message: {
                storing: `${response.count} ${response.count > 1 ? 'contacts' : 'contact'}`
            }
        })
    } catch (error: any) {
        res.status(error.statusCode);
        next(error)
    }
}
export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { payload } = req.body
        const response = await Model.update(payload);
        res.status(200).json({
            status: 'OK',
            code: 200,
            details: response
        })
    } catch (error: any) {
        res.status(error.statusCode)
        next(error)
    }
}

export const populateContacts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Model.read();
        res.status(200).json({
            status: 'OK',
            code: 200,
            data: response
        })
    } catch (error: any) {
        res.status(error.statusCode);
        next(error)
    }
}

export const removeContact = async (req: Request, res: Response, next: NextFunction) => {
    const { ids } = req.body
    try {
        const response: any = await Model.remove(ids);
        res.status(200).json({
            status: 'OK',
            code: 200,
            message: {
                removing: `${response.count} ${response.count > 1 ? 'contacts' : 'contact'}`
            }
        })
    } catch (error: any) {
        res.status(error.statusCode)
        next(error)
    }
}