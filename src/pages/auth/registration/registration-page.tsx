import registrationStyles from '../styles.module.css'
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useForm} from "../../../utils/hooks/useForm";
import {register} from "../../../services/thunks/user/user";
import {FormEvent} from "react";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {IUser} from "../../../utils/types";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";

export const RegistrationPage = (): JSX.Element => {
    const {form, change} = useForm({name: '',email: '', password: ''})
    const {registerFailed,registerError} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(register(form as IUser))
    }
    return (
        <section className={registrationStyles.wrapper}>
            <form className={registrationStyles.form} onSubmit={handleSubmit}>
                <header className={'mb-6'}>
                    <h3 className={'text text_type_main-medium'}>
                        Регистрация
                    </h3>
                </header>
                <div className={'mb-20'}>
                    <Input extraClass={'mb-6'}
                           placeholder='Имя'
                           name={'name'}
                           type={'text'}
                           onChange={change}
                           value={form.name}/>
                    <Input extraClass={'mb-6'}
                           placeholder='E-mail'
                           name={'email'}
                           type={'email'}
                           onChange={change}
                           value={form.email}/>
                    <PasswordInput
                        onChange={change}
                        value={form.password}
                        name={'password'}
                        extraClass={'mb-6'}
                    />
                    {registerFailed && <p className={'text text_type_main-default text_color_error mb-4'}>
                        {registerError}
                    </p>}
                    <Button className={'button button_size_medium button_type_primary'}
                            htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Зарегестрироваться
                        </span>
                    </Button>
                </div>
                <footer>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        Уже зарегестрированы? <Link to={'/login'}>Войти</Link>
                    </p>
                </footer>
            </form>
        </section>
    )
}