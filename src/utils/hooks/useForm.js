import {useState} from "react";

export const useForm = (fields, {disabledFieldsInit = []} = {}) => {
    const [form, setForm] = useState(fields)
    const [disabledFields, setDisabledFields] = useState(disabledFieldsInit)
    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    const reset = () => {
        setForm({...fields})
        setDisabledFields([...disabledFieldsInit])
    }
    const toggleFieldAvailability = (name) => {
        setDisabledFields(disabledFields.includes(name) ? disabledFields.filter(fieldName => fieldName !== name) : [...disabledFields, name])
    }

    return {form, change, reset, disabledFields, toggleFieldAvailability};
};