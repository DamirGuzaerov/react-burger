import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {MainPage} from "../../pages/main/main-page";
import {MainLayout} from "../layouts/main-layout/main-layout";
import {LoginPage} from "../../pages/auth/login/login-page";
import {RegistrationPage} from "../../pages/auth/registration/registration-page";
import {ForgotPasswordPage} from "../../pages/auth/forgot-password/forgot-password-page";
import {ResetPasswordPage} from "../../pages/auth/reset-password/reset-password-page";
import {ProfileLayout} from "../layouts/profile-layout/profile-layout";
import {ProfilePage} from "../../pages/profile/profile-page";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import React, {useEffect} from "react";
import {getUser} from "../../services/thunks/user";
import {useDispatch} from "react-redux";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import {getBurgerIngredients} from "../../services/thunks/ingredients";
import {IngredientPage} from "../../pages/ingredient/ingredient-page";

function App() {
    const dispatch = useDispatch()
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
                    <Route path={'/registration'} element={<OnlyUnAuth element={<RegistrationPage/>}/>}/>
                    <Route path={'/forgotPassword'} element={<OnlyUnAuth element={<ForgotPasswordPage/>}/>}/>
                    <Route path={'/resetPassword'} element={<OnlyUnAuth element={<ResetPasswordPage/>}/>}/>
                    <Route path={'/profile'} element={<OnlyAuth element={<ProfileLayout/>}/>}>
                        <Route index element={<ProfilePage/>}/>
                    </Route>
                    <Route path={'/ingredients/:id'} element={<IngredientPage/>}/>
                </Route>
            </Routes>

            {background && (
                <Routes>
                    <Route
                        path='/ingredients/:id'
                        element={
                            <Modal onClose={handleModalClose}>
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                </Routes>)}
        </>

    );
}

export default App;
