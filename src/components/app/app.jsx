import appStyles from './app.module.css';
import {AppHeader} from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBurgerIngredients} from "../../services/thunks/ingredients";

function App() {
    const dispatch = useDispatch()
    const {ingredients, ingredientsRequested} = useSelector(state => state.ingredients)
    useEffect(()=>{
        dispatch(getBurgerIngredients())
    },[dispatch])
    return (
        <div className={appStyles['main-wrapper']}>
            <AppHeader/>
            <main className={appStyles.content}>
                <div className={appStyles['burger-ingredients']}>
                    <h1 className={'text text_type_main-large pt-10 mb-5'}>Соберите бургер</h1>
                    {ingredientsRequested ? 'Loading...' : <BurgerIngredients ingredients={ingredients}/>}
                </div>
                <div className={'pt-25'}>
                    {ingredientsRequested ? 'Loading...' : <BurgerConstructor ingredients={ingredients}/>}
                </div>
            </main>
        </div>
    );
}

export default App;
