import { PrismaClient, Prisma } from "@prisma/client";

export const DB = new PrismaClient();
export type BatchPayload = Prisma.BatchPayload

class PrismaError extends Error {
    statusCode: number

    constructor(message: any, statusCode: number) {
        super(message)
        this.message = message || undefined
        this.statusCode = statusCode
        this.name = this.constructor.name

        Object.setPrototypeOf(this, PrismaError.prototype)
    }
}
export const prismaErrHandler = (error: any) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const { meta } = error;
        throw new PrismaError(meta?.cause, 400)
    }

    throw new PrismaError('Oops there is something wrong with our backend, please try again later', 500)
}