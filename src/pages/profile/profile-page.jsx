import {useForm} from "../../utils/hooks/useForm";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import profileStyles from './profile-page.module.css'

export const ProfilePage = () => {
    const {form, change} = useForm({name: '', email: '', password: ''})
    const {isOpen: hidden, toggle} = useDisclosure(false)

    return (
            <form className={profileStyles.form}>
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
                            Сохранить
                        </span>
                    </Button>
                </div>
            </form>)
}