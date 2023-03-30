import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "../../pages/main/main-page";
import {LoginPage} from "../../pages/login/login-page";
import {MainLayout} from "../layouts/main-layout/main-layout";
import {RegistrationPage} from "../../pages/registration/registration-page";
import {ForgotPasswordPage} from "../../pages/forgot-password/forgot-password-page";
import {ResetPasswordPage} from "../../pages/reset-password/reset-password-page";

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
