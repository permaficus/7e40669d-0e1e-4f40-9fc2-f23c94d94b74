import Joi, { ValidationError} from 'joi';

const validator = async (schema: any, payload: any) => {
    return await schema.validateAsync(payload, {
        abortEarly: true,
        allowUnknow: false
    })
};
const _template_: any = {
    payload: Joi.array().items(Joi.object({
        firstName: Joi.string().label('Firstname').required(),
        lastName: Joi.string().label('Lastname').required(),
        position: Joi.string().label('Job Position').required(),
        phone: Joi.string().label('Phone').required(),
        email: Joi.string().email().label('Email').required().messages({'string.email': 'Invalid email address'})
    }).messages({'object.unknown': `Payload items doesn't meet our valid requirement`})).label('Payload').required()
}
const validateSchema = async (payload: any) => {
    let selectedSchema: any = {}
    for (let props in payload) {
        if (_template_.hasOwnProperty(props)) {
            selectedSchema[props] = _template_[props]
        }
    }
    let schema = Joi.object(selectedSchema)
    return await validator(schema, payload)
}

export { validateSchema, ValidationError }