import { Model } from "../../model";
import { Request, Response, NextFunction } from 'express'

export const storeContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { payload } = req.body;
        const response = await Model.create(payload);
        res.status(200).json({
            status: 'OK',
            code: '200',
            message: {
                storing: `${response.count} ${response.count > 1 ? 'contacts' : 'contact'}`
            }
        })
    } catch (error: any) {
        res.status(500);
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
        res.status(500);
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
        res.status(500);
        next(error)
    }
}