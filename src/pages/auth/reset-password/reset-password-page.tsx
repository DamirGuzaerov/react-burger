import resetPasswordStyles from '../styles.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate, useLocation} from "react-router-dom";
import {useForm} from "../../../utils/hooks/useForm";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {resetPassword} from "../../../services/thunks/password";
import loader from "../../../images/loader.svg";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";
import {useAppSelector} from "../../../utils/hooks/useAppSelector";
import {FormEvent} from "react";

export const ResetPasswordPage = () => {
		const {form, change} = useForm({password: '', code: ''})
		const {isOpen: hidden, toggle} = useDisclosure(false)
		const location = useLocation()
		const dispatch = useAppDispatch();
		const {
				passwordResetRequested,
				passwordResetSucceed,
				passwordResetFailed,
		} = useAppSelector(state => state.password)

		const handleSubmit = (e: FormEvent) => {
				e.preventDefault();
				dispatch(resetPassword({password: form.password, code: form.code}))
		}

		if (location.state && location.state.from) {
				if (location.state.from.pathname !== '/forgot-password')
						return <Navigate to={'/'}/>
		} else return <Navigate to={'/'}/>

		if (passwordResetSucceed)
				return <Navigate to={'/profile'}/>

		return (
				<section className={resetPasswordStyles.wrapper}>
						<form className={resetPasswordStyles.form} onSubmit={handleSubmit}>
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
										<Button size={"medium"}
														type={"primary"}
														htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Сохранить
                        </span>
												{passwordResetRequested &&
                            <img className={`button-loader pl-10`} src={loader} alt="loading..."/>}
										</Button>
										{passwordResetFailed &&
                        <p
                            className={'text text_type_main-default text_color_error pt-5'}>
                            Проверьте корректность введенных данных
                        </p>}
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