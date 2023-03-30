import {useState} from "react";

export const useForm = (fields) => {
    const [form, setForm] = useState(fields)
    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    return { form, change };
};