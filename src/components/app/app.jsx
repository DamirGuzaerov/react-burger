import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "../../pages/main/main-page";
import {LoginPage} from "../../pages/login/login-page";
import {MainLayout} from "../layouts/main-layout/main-layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainLayout />}>
                        <Route index element={<MainPage/>}/>
                        <Route path={'/login'} element={<LoginPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
