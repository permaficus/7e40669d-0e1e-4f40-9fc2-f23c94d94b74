import { validateSchema, ValidationError } from "../../libs/joi.utils";
import { NextFunction, Request, Response } from "express";

export const validateRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await validateSchema(req.body);
        next();
    } catch (error: any) {
        if (error instanceof ValidationError) {
            res.status(400);
            next(new Error(error.message.replace(/"/g, '')));
        }
    }
}