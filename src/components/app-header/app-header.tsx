import {Logo, BurgerIcon, ProfileIcon, ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
import {Link, NavLink} from "react-router-dom";

export const AppHeader = (): JSX.Element => {
    return (
        <header className={`${headerStyles.header}`}>
            <nav className={`${headerStyles.nav} pt-4 pb-4`}>
                <ol className={headerStyles['nav-list']}>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5 mr-2`}>
                        <NavLink to={'/'}
                                 className={({isActive}) => isActive ?
                                     'text text_type_main-medium text_color_primary' :
                                     'text text_type_main-medium text_color_inactive'}>
                            {({isActive}) => (
                                <div className={headerStyles.link}>
                                    <BurgerIcon type={isActive ? 'primary' : 'secondary'}/>
                                    <span className={'pl-2 text text_type_main-default'}>
                                    Конструктор
                                </span>
                                </div>
                            )
                            }
                        </NavLink>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <NavLink to={'orders'}
                                 className={({isActive}) => isActive ?
                                     'text text_type_main-medium text_color_primary' :
                                     'text text_type_main-medium text_color_inactive'}>
                            {({isActive}) => (
                                <div className={headerStyles.link}>
                                    <ListIcon type={isActive ? 'primary' : 'secondary'}/>
                                    <span className={'pl-2 text text_type_main-default'}>
                                    Лента заказов
                                </span>
                                </div>
                            )
                            }
                        </NavLink>
                    </li>
                    <li className={`${headerStyles.logo} pt-6 pb-6`}>
                        <Link to={'/'}>
                            <Logo/>
                        </Link>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <NavLink to={'/profile'}
                                 className={({isActive}) => isActive ?
                                     'text text_type_main-medium text_color_primary' :
                                     'text text_type_main-medium text_color_inactive'}>
                            {({isActive}) => (
                                <div className={headerStyles.link}>
                                    <ProfileIcon type={isActive ? 'primary' : 'secondary'}/>
                                    <span className={'pl-2 text text_type_main-default'}>
                                        Личный кабинет
                                    </span>
                                </div>
                            )
                            }
                        </NavLink>
                    </li>
                </ol>
            </nav>
        </header>
    )
}