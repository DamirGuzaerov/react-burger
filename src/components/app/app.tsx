import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {MainPage} from "../../pages/main/main-page";
import {MainLayout} from "../layouts/main-layout/main-layout";
import {LoginPage} from "../../pages/auth/login/login-page";
import {RegistrationPage} from "../../pages/auth/registration/registration-page";
import {ForgotPasswordPage} from "../../pages/auth/forgot-password/forgot-password-page";
import {ResetPasswordPage} from "../../pages/auth/reset-password/reset-password-page";
import {ProfileLayout} from "../layouts/profile-layout/profile-layout";
import {ProfilePage} from "../../pages/user/profile/profile-page";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import React, {useEffect} from "react";
import {getUser} from "../../services/thunks/user";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import {getBurgerIngredients} from "../../services/thunks/ingredients";
import {IngredientPage} from "../../pages/ingredient/ingredient-page";
import {OrdersHistoryPage} from "../../pages/user/orders/orders-history-page";
import {OrdersPage} from "../../pages/orders/orders-page";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {Order} from "../order/order";
import {OrderPage} from "../../pages/order/order-page";

function App(): JSX.Element {
		const dispatch = useAppDispatch()
		const location = useLocation();
		const navigate = useNavigate();
		const background = location.state && location.state.background;

		const handleModalClose = () => {
				navigate(-1);
		};

		useEffect(() => {
				dispatch(getUser())
				dispatch(getBurgerIngredients())
		}, [dispatch])

		return (
				<>
						<Routes location={background || location}>
								<Route path={'/'} element={<MainLayout/>}>
										<Route index element={<MainPage/>}/>
										<Route path={'/login'} element={<OnlyUnAuth element={<LoginPage/>}/>}/>
										<Route path={'/register'} element={<OnlyUnAuth element={<RegistrationPage/>}/>}/>
										<Route path={'/forgot-password'} element={<OnlyUnAuth element={<ForgotPasswordPage/>}/>}/>
										<Route path={'/reset-password'} element={<OnlyUnAuth element={<ResetPasswordPage/>}/>}/>
										<Route path={'/feed'} element={<OrdersPage/>}/>
										<Route path={'/feed/:id'} element={<OrderPage/>}/>
										<Route path={'/profile'} element={<OnlyAuth element={<ProfileLayout/>}/>}>
												<Route index element={<ProfilePage/>}/>
												<Route path={'orders'} element={<OrdersHistoryPage/>}/>
										</Route>
										<Route path={'/profile/orders/:id'} element={<OrderPage/>}/>
										<Route path={'/ingredients/:id'} element={<IngredientPage/>}/>
								</Route>
						</Routes>

						{background && (
								<Routes>
										<Route
												path='/ingredients/:id'
												element={
														<Modal
																title={<h2 className={'text text_type_main-large'}>Детали ингредиента</h2>}
																onClose={handleModalClose}>
																<IngredientDetails/>
														</Modal>
												}
										/>
										<Route
												path='/profile/orders/:id'
												element={
														<Modal
																title={location.state && <>
                                    <h2 className={'text text_type_digits-default'}>#{location.state.modalTitle}</h2>
                                </>}
																onClose={handleModalClose}>
																<Order/>
														</Modal>
												}
										/>
										<Route
												path='/feed/:id'
												element={
														<Modal
																title={location.state && <>
                                    <h2 className={'text text_type_digits-default'}>#{location.state.modalTitle}</h2>
                                </>}
																onClose={handleModalClose}>
																<Order/>
														</Modal>
												}
										/>
								</Routes>
						)
						}
				</>

		);
}

export default App;
