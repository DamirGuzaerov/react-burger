import registrationStyles from '../styles.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useForm} from "../../../utils/hooks/useForm";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";
import {useDispatch} from "react-redux";
import {register} from "../../../services/thunks/user";

export const RegistrationPage = () => {
    const {form, change} = useForm({name: '',email: '', password: ''})
    const {isOpen: hidden, toggle} = useDisclosure(false)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(form))
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
                    <Input extraClass={'mb-6'}
                           placeholder='Пароль'
                           name='password'
                           type={hidden ? 'password' : 'text'}
                           icon={hidden ? 'HideIcon' : 'ShowIcon'}
                           onIconClick={toggle}
                           onChange={change}
                           value={form.password}/>
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