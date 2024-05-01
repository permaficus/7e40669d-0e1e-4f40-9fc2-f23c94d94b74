import Joi, { ValidationError} from 'joi';

type Options = 'storing' | 'update';

const validator = async (schema: any, payload: any) => {
    return await schema.validateAsync(payload, {
        abortEarly: true,
        allowUnknow: false
    })
};
const _template_ = (opts: Options ): any => {
    return {
        payload: Joi.array().items(Joi.object({
            ...opts == 'update' && { id: Joi.string().label('Doc ID').required() },
            firstName: opts == 'storing' ? Joi.string().label('Firstname').required() : Joi.string().allow(''),
            lastName: opts == 'storing' ? Joi.string().label('Lastname').required() : Joi.string().allow(''),
            position: opts == 'storing' ? Joi.string().label('Job Position').required() : Joi.string().allow(''),
            phone: opts == 'storing' ? Joi.string().label('Phone').required() : Joi.string().allow(''),
            email: opts == 'storing' ? Joi.string().email().label('Email').required().messages({'string.email': 'Invalid email address'}) :
                Joi.string().email().messages({'string.email': 'Invalid email address'})
        }).messages({'object.unknown': `Payload items doesn't meet our valid requirement`})).label('Payload').required()
    }
}
const validateSchema = async ({ payload, opts }: any) => {
    let selectedSchema: any = {}
    for (let props in payload) {
        if (_template_(opts).hasOwnProperty(props)) {
            selectedSchema[props] = _template_(opts)[props]
        }
    }
    let schema = Joi.object(selectedSchema)
    return await validator(schema, payload)
}

export { validateSchema, ValidationError, Options }