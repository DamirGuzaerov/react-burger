import mainStyles from "../../pages/main/main-page.module.css";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import {useAppSelector} from "../../utils/hooks/useAppSelector";

export const MainPage = (): JSX.Element => {
    const {ingredientsRequested} = useAppSelector(state => state.ingredients)

    return (
        <main className={mainStyles.content}>
            <div className={mainStyles['burger-ingredients']}>
                <h1 className={'text text_type_main-large pt-10 mb-5'}>Соберите бургер</h1>
                {ingredientsRequested ? 'Loading...' : <BurgerIngredients/>}
            </div>
            <div className={'pt-25'}>
                <BurgerConstructor/>
            </div>
        </main>
    );
}