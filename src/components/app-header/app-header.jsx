import {Logo, BurgerIcon, ProfileIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import {NavLink} from "react-router-dom";

export const AppHeader = () => {
    return (
        <header className={`${headerStyles.header}`}>
            <nav className={`${headerStyles.nav} pt-4 pb-4`}>
                <ol className={headerStyles['nav-list']}>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5 mr-2`}>
                        <NavLink to={'/'} className={headerStyles.link}>
                            <BurgerIcon type={'primary'}/>
                            <span className={'pl-2 text text_type_main-default'}>
                                Конструктор
                            </span>
                        </NavLink>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <NavLink to={'/orders'} className={headerStyles.link}>
                            <ListIcon type={'secondary'}/>
                            <span className={'pl-2 text text_type_main-default text_color_inactive'}>
                                Лента заказов
                            </span>
                        </NavLink>
                    </li>
                    <li className={`${headerStyles.logo} pt-6 pb-6`}>
                        <Logo/>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <NavLink to={'/profile'} className={headerStyles.link}>
                            <ProfileIcon type={'secondary'}/>
                            <span className={'pl-2 text text_type_main-default text_color_inactive'}>
                                Личный кабинет
                            </span>
                        </NavLink>
                    </li>
                </ol>
            </nav>
        </header>
    )
}