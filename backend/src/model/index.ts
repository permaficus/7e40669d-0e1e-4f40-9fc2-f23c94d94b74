import { DB } from "../libs/prisma.utils";
interface DataSet {
    firstName: string
    lastName: string
    phone: string
    email: string
    position: string
}
const display = ({ schema }: any) => {
    let newSchema: any = {};
    for (let props in schema) {
        newSchema[props] = true
    }
    return newSchema
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
                    select: display({ schema: items })
                });
            }));
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }

    static read = async (): Promise<any> => {
        try {
            return await DB.contact.findMany()
        } catch (error: any) {
            throw new Error(error)
        }
    }

    static remove = async (id: string[]) => {
        try {
            return await DB.contact.deleteMany({
                where: {
                    id: { in: id }
                }
            })
        } catch (error: any) {
            throw new Error(error)
        }
    }
}