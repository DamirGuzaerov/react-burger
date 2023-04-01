import layoutStyles from './profile-layout.module.css'
import {NavLink, Outlet} from "react-router-dom";

export const ProfileLayout = () => {
    return (
        <div className={layoutStyles['profile-wrapper']}>
            <div className={layoutStyles.info}>
                <nav className={'mb-20'}>
                    <ul>
                        <li className={layoutStyles.link}>
                            <NavLink to={'/profile'}
                                     className={({isActive}) => isActive ?
                                         'text text_type_main-medium text_color_primary' :
                                         'text text_type_main-medium text_color_inactive'}>
                                Профиль
                            </NavLink>
                        </li>
                        <li className={layoutStyles.link}>
                            <NavLink to={'/orders'}
                                     className={({isActive}) => isActive ?
                                         'text text_type_main-medium text_color_primary' :
                                         'text text_type_main-medium text_color_inactive'}>
                                История заказов
                            </NavLink>
                        </li>
                        <li className={layoutStyles.link}>
                            <NavLink to={'/logout'}
                                     className={({isActive}) => isActive ?
                                         'text text_type_main-medium text_color_primary' :
                                         'text text_type_main-medium text_color_inactive'}>
                                Выход
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <p className={`${layoutStyles.description} text text_type_main-small text_color_inactive`}>
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
            <div className={'ml-15'}>
                {<Outlet/>}
            </div>
        </div>
    )
}