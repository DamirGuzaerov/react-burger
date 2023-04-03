import {useForm} from "../../utils/hooks/useForm";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from './profile-page.module.css'
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "../../services/thunks/user";
import {Link} from "react-router-dom";

export const ProfilePage = () => {
    const user = useSelector(state => state.user.user)
    const {form, change, reset, disabledFields, toggleFieldAvailability} = useForm({
        name: user.name,
        email: user.email,
        password: ''
    }, {disabledFieldsInit: ['name', 'email', 'password']})
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(form))
    }

    return (
        <form className={profileStyles.form} onSubmit={handleSubmit}>
            <div className={'mb-20'}>
                <Input extraClass={'mb-6'}
                       placeholder='Имя'
                       disabled={disabledFields.includes('name')}
                       name={'name'}
                       type={'text'}
                       icon={disabledFields.includes('name') ? 'EditIcon' : 'CloseIcon'}
                       onIconClick={() => toggleFieldAvailability('name')}
                       onChange={change}
                       value={form.name}/>
                <Input extraClass={'mb-6'}
                       placeholder='E-mail'
                       disabled={disabledFields.includes('email')}
                       name={'email'}
                       type={'email'}
                       onChange={change}
                       icon={disabledFields.includes('email') ? 'EditIcon' : 'CloseIcon'}
                       onIconClick={() => toggleFieldAvailability('email')}
                       value={form.email}/>
                <Input extraClass={'mb-6'}
                       placeholder='Пароль'
                       disabled={disabledFields.includes('password')}
                       name='password'
                       type={'password'}
                       icon={disabledFields.includes('password') ? 'EditIcon' : 'CloseIcon'}
                       onIconClick={() => toggleFieldAvailability('password')}
                       onChange={change}
                       value={form.password}/>
                {
                    disabledFields.length !== Object.keys(form).length &&
                    <div>
                        <Link to={'/profile'}
                              className={'text text_type_main-default text_color_accent mr-7'}
                              onClick={reset}>
                            Отмена
                        </Link>
                        <Button className={'button button_size_medium button_type_primary'}
                                htmlType={'submit'}>
                        <span className={'text text_type_main-default'}>
                            Сохранить
                        </span>
                        </Button>
                    </div>
                }
            </div>
        </form>)
}