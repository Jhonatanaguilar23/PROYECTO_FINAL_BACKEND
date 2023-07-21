import { NextFunction, request, response } from "express";
import { validationResult } from "express-validator";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw()
        return next();
    } catch (err) {
        response.status(403)
        response.send(err)
    }
}


export default validateResult
