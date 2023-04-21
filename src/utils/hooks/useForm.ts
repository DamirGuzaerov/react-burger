import {ChangeEvent, useState} from "react";

interface IFormOptions{
		disabledFieldsInit?: string[]
}
export const useForm = (fields: { [key: string]: string }, {disabledFieldsInit = []}:IFormOptions = {}) => {
		const [form, setForm] = useState(fields)
		const [disabledFields, setDisabledFields] = useState(disabledFieldsInit)
		const change = (e: ChangeEvent<HTMLInputElement>) => {
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
		const toggleFieldAvailability = (name: string) => {
				setDisabledFields(disabledFields.includes(name) ? disabledFields.filter(fieldName => fieldName !== name) : [...disabledFields, name])
		}

		return {form, change, reset, disabledFields, toggleFieldAvailability};
};