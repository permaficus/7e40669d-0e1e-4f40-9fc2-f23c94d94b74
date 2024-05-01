import { validateSchema, ValidationError, Options } from "../../libs/joi.utils";
import { NextFunction, Request, Response } from "express";

export const validateRequest = (options: Options) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await validateSchema({ payload: req.body, opts: options });
            next();
        } catch (error: any) {
            if (error instanceof ValidationError) {
                res.status(400);
                next(new Error(error.message.replace(/"/g, '')));
            }
        }
    }
}