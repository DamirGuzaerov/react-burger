import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'
export const AppHeader = () => {
    return (
        <header className={`${headerStyles.header}`}>
            <nav className={`${headerStyles.nav} pt-4 pb-4`}>
                <ol className={headerStyles['nav-list']}>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5 mr-2`}>
                        <BurgerIcon type={'primary'}/>
                        <span className={'pl-2 text text_type_main-default'}>
                            Конструктор
                        </span>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <ListIcon type={'secondary'}/>
                        <span className={'pl-2 text text_type_main-default text_color_inactive'}>
                            Лента заказов
                        </span>
                    </li>
                    <li className={`${headerStyles.logo} pt-6 pb-6`}>
                        <Logo/>
                    </li>
                    <li className={`${headerStyles['nav-item']} pt-4 pb-4 pl-5 pr-5`}>
                        <ProfileIcon type={'secondary'}/>
                        <span className={'pl-2 text text_type_main-default text_color_inactive'}>
                            Личный кабинет
                        </span>
                    </li>
                </ol>
            </nav>
        </header>
    )
}