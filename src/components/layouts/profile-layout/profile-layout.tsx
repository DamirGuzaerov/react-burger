import layoutStyles from './profile-layout.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import {logout as logoutUser} from "../../../services/thunks/user/user";
import {useAppDispatch} from "../../../utils/hooks/useAppDispatch";

export const ProfileLayout = (): JSX.Element => {
		const dispatch = useAppDispatch()
		const logout = () => {
				dispatch(logoutUser())
		}

		return (
				<div className={layoutStyles['profile-wrapper']}>
						<div className={layoutStyles.info}>
								<nav className={'mb-20'}>
										<ul>
												<li className={layoutStyles.link}>
														<NavLink to={'/profile'}
																		 end
																		 className={({isActive}) => isActive ?
																				 'text text_type_main-medium text_color_primary' :
																				 'text text_type_main-medium text_color_inactive'}>
																Профиль
														</NavLink>
												</li>
												<li className={layoutStyles.link}>
														<NavLink to={'orders'}
																		 className={({isActive}) => isActive ?
																				 'text text_type_main-medium text_color_primary' :
																				 'text text_type_main-medium text_color_inactive'}>
																История заказов
														</NavLink>
												</li>
												<li className={layoutStyles.link}>
														<Link to={'/profile'}
																	onClick={logout}
																	className={'text text_type_main-medium text_color_inactive'}>
																Выход
														</Link>
												</li>
										</ul>
								</nav>
								<p className={`${layoutStyles.description} text text_type_main-small text_color_inactive`}>
										В этом разделе вы можете
										изменить свои персональные данные
								</p>
						</div>
						<div className={`${layoutStyles.content} ml-15`}>
								{<Outlet/>}
						</div>
				</div>
		)
}