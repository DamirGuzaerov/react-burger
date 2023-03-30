import resetPasswordStyles from '../styles.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useForm} from "../../../utils/hooks/useForm";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";

export const ResetPasswordPage = () => {
    const {form, change} = useForm({password: '', code: ''})
    const {isOpen: hidden, toggle} = useDisclosure(false)

    return (
        <section className={resetPasswordStyles.wrapper}>
            <form className={resetPasswordStyles.form}>
                <header className={'mb-6'}>
                    <h3 className={'text text_type_main-medium'}>
                        Восстановление пароля
                    </h3>
                </header>
                <div className={'mb-20'}>
                    <Input extraClass={'mb-6'}
                           placeholder='Введите новый пароль'
                           name='password'
                           type={hidden ? 'password' : 'text'}
                           icon={hidden ? 'HideIcon' : 'ShowIcon'}
                           onIconClick={toggle}
                           onChange={change}
                           value={form.password}/>
                    <Input extraClass={'mb-6'}
                           placeholder='Введите код из письма'
                           name='code'
                           type={'text'}
                           onChange={change}
                           value={form.code}/>
                    <Button className={'button button_size_medium button_type_primary'}
                            htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Сохранить
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