import loginStyles from './login-page.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    const [form, setForm] = useState({email: '', password: ''})
    const [hidden, setHidden] = useState(true)
    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    const onIconClick = () => {
        setHidden(!hidden)
    }

    return (
        <section className={loginStyles.wrapper}>
            <form className={loginStyles.form}>
                <header className={'mb-6'}>
                    <h3 className={'text text_type_main-medium'}>
                        Вход
                    </h3>
                </header>
                <div className={'mb-20'}>
                    <Input extraClass={'mb-6'}
                           placeholder='E-mail'
                           name={'email'}
                           type={'email'}
                           onChange={handleOnChange}
                           value={form.email}/>
                    <Input extraClass={'mb-6'}
                           placeholder='Пароль'
                           name='password'
                           type={hidden ? 'password' : 'text'}
                           icon={hidden ? 'HideIcon' : 'ShowIcon'}
                           onIconClick={onIconClick}
                           onChange={handleOnChange}
                           value={form.password}/>
                    <Button className={'button button_size_medium button_type_primary'}
                            htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Войти
                        </span>
                    </Button>
                </div>
                <footer>
                    <p className={'text text_type_main-default text_color_inactive mb-1'}>
                        Вы - новый пользователь? <Link to={'/registration'}>Зарегестрироваться</Link>
                    </p>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        Забыли пароль? <Link to={'/login'}>Восстановить пароль</Link>
                    </p>
                </footer>
            </form>
        </section>
    )
}