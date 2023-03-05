import appStyles from './app.module.css';
import {AppHeader} from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import useFetch from "../../utils/hooks/useFetch";

function App() {
    const {data, isLoading} = useFetch('api/ingredients')
    return (
        <div className={appStyles['main-wrapper']}>
            <AppHeader/>
            <main className={appStyles.content}>
                <div className={appStyles['burger-ingredients']}>
                    <h1 className={'text text_type_main-large pt-10 mb-5'}>Соберите бургер</h1>
                    {isLoading ? 'Loading...' : <BurgerIngredients ingredients={data}/>}
                </div>
                <div className={'pt-25'}>
                    {isLoading ? 'Loading...' : <BurgerConstructor ingredients={data}/>}
                </div>
            </main>
        </div>
    );
}

export default App;
