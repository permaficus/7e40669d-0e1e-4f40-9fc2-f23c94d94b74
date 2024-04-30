import { Model } from "../../model";
import { Request, Response, NextFunction, response } from 'express'

export const storeContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Model.create(req.body);
        res.status(200).json({
            status: 'OK',
            code: '200',
            message: {
                storing: `${response.count} contacts`
            }
        })
    } catch (error: any) {
        res.status(500);
        next(error)
    }
}
export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await Model.update(req.body);
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