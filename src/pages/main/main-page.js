import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBurgerIngredients} from "../../services/thunks/ingredients";
import mainStyles from "../../pages/main/main-page.module.css";
import {AppHeader} from "../../components/app-header/app-header";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";

export const MainPage = () => {
    const dispatch = useDispatch()
    const {ingredientsRequested} = useSelector(state => state.ingredients)
    useEffect(() => {
        dispatch(getBurgerIngredients())
    }, [dispatch])
    return (
        <div className={mainStyles['main-wrapper']}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className={mainStyles.content}>
                    <div className={mainStyles['burger-ingredients']}>
                        <h1 className={'text text_type_main-large pt-10 mb-5'}>Соберите бургер</h1>
                        {ingredientsRequested ? 'Loading...' : <BurgerIngredients/>}
                    </div>
                    <div className={'pt-25'}>
                        <BurgerConstructor/>
                    </div>
                </main>
            </DndProvider>
        </div>
    );
}