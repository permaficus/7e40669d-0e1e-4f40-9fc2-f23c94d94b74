import { DB } from "../libs/prisma.utils";
interface DataSet {
    firstName: string
    lastName: string
    phone: string
    email: string
    position: string
}

export class Model {
    static create = async (payload: DataSet) => {
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
                const { id, ...newItems} = items
                return await DB.contact.update({
                    where: {
                        id: items.id
                    },
                    data: {...newItems},
                    select: {
                        id: true,
                        ...items.firstName && { firstName: true },
                        ...items.lastName && { lastName: true },
                        ...items.position && { position: true },
                        ...items.email && { email: true },
                        ...items.phone && { phone: true }
                    }
                });
            }));
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }
}