import { PrismaClient, Prisma } from "@prisma/client";

export const DB = new PrismaClient();
export type BatchPayload = Prisma.BatchPayload

class PrismaError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.name = this.constructor.name

        Object.setPrototypeOf(this, PrismaError.prototype)
    }
}
export const prismaErrHandler = (error: any) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const { meta }: any = error;
        throw new PrismaError(meta?.cause, 400)
    }

    throw new PrismaError('Oops there is something wrong with our backend, please try again later', 500)
}