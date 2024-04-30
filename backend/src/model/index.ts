import { DB } from "../libs/prisma.utils";

export class Model {
    static create = async (payload: any) => {
        try {
            return await DB.contact.createMany({
                data: payload
            })
        } catch (error: any) {
            throw new Error(error)
        }
    }
    static update = async (payload: any) => {
        try {
            const result = await Promise.all(payload.map(async (items: any) => {
                return await DB.contact.update({
                    where: {
                        id: items.id
                    },
                    data: {
                        ...items.firstName && { firstName: items.firstName },
                        ...items.lastName && { lastName: items.lastName },
                        ...items.position && { position: items.position },
                        ...items.email && { email: items.email }
                    }
                });
            }));
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }
}