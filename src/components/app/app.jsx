import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "../../pages/main/main-page";
import {MainLayout} from "../layouts/main-layout/main-layout";
import {LoginPage} from "../../pages/auth/login/login-page";
import {RegistrationPage} from "../../pages/auth/registration/registration-page";
import {ForgotPasswordPage} from "../../pages/auth/forgot-password/forgot-password-page";
import {ResetPasswordPage} from "../../pages/auth/reset-password/reset-password-page";
import {ProfileLayout} from "../layouts/profile-layout/profile-layout";
import {ProfilePage} from "../../pages/profile/profile-page";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainLayout />}>
                        <Route index element={<MainPage/>}/>
                        <Route path={'/login'} element={<LoginPage/>}/>
                        <Route path={'/registration'} element={<RegistrationPage/>}/>
                        <Route path={'/forgotPassword'} element={<ForgotPasswordPage/>}/>
                        <Route path={'/resetPassword'} element={<ResetPasswordPage/>}/>
                        <Route path={'/profile'} element={<ProfileLayout/>}>
                            <Route index element={<ProfilePage/>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
