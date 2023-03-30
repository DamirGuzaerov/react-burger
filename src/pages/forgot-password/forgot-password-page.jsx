import forgotPasswordStyles from './forgot-password.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useForm} from "../../utils/hooks/useForm";

export const ForgotPasswordPage = () => {
    const {form, change} = useForm({email: ''})

    return (
        <section className={forgotPasswordStyles.wrapper}>
            <form className={forgotPasswordStyles.form}>
                <header className={'mb-6'}>
                    <h3 className={'text text_type_main-medium'}>
                        Восстановление пароля
                    </h3>
                </header>
                <div className={'mb-20'}>
                    <Input extraClass={'mb-6'}
                           placeholder='Укажите e-mail'
                           name={'email'}
                           type={'email'}
                           onChange={change}
                           value={form.email}/>
                    <Button className={'button button_size_medium button_type_primary'}
                            htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Восстановить
                        </span>
                    </Button>
                </div>
                <footer>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        Вспомнили пароль? <Link to={'/login'}>Войти</Link>
                    </p>
                </footer>
            </form>
        </section>
    )
}