import forgotPasswordStyles from '../styles.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation} from "react-router-dom";
import {useForm} from "../../../utils/hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {getPasswordResetCode} from "../../../services/thunks/password";
import loader from "../../../images/loader.svg";

export const ForgotPasswordPage = () => {
    const {form, change} = useForm({email: ''})
    const location = useLocation()
    const dispatch = useDispatch()

    const {
        passwordResetCodeRequested,
        passwordResetCodeSucceed,
    } = useSelector(state => state.password)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form.email)
        dispatch(getPasswordResetCode(form.email))
    }

    if (passwordResetCodeSucceed)
        return <Navigate to={'/resetPassword'} state={{from: location}}/>

    return (
        <section className={forgotPasswordStyles.wrapper}>
            <form className={forgotPasswordStyles.form} onSubmit={handleSubmit}>
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
                    <Button
                        className={'button button_size_medium button_type_primary'}
                        htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Восстановить
                        </span>
                        {passwordResetCodeRequested &&
                            <img className={`button-loader pl-10`} src={loader} alt="loading..."/>}
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