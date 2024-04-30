import { DB } from "../libs/prisma.utils";

export class Model {
    static create = async (payload: any) => {
        try {
            return await DB.contact.createMany({
                data: payload
            })
        } catch (error: any) {
            return error
        }
    }
    static update = async (payload: any) => {
        try {
            return await DB.$transaction(payload.map(async (items: any) => {
                await DB.contact.update({
                    where: { id: items.id },
                    data: {
                        ...items.firstName && { firstName: items.firstName },
                        ...items.lastName && { lastName: items.lastName },
                        ...items.position && { position: items.position },
                        ...items.email && { email: items.email }
                    }
                })
            }))
        } catch (error: any) {
            return error
        }
    }
}