import React from 'react';
import appStyles from './app.module.css';
import {AppHeader} from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {ingredients} from "../../utils/data"
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    return (
        <div className={appStyles['main-wrapper']}>
            <AppHeader/>
            <main className={appStyles.content}>
                <div className={appStyles['burger-ingredients']}>
                    <h1 className={'text text_type_main-large pt-10 mb-5'}>Соберите бургер</h1>
                    <BurgerIngredients ingredients={ingredients}/>
                </div>
                <div className={'pt-25'}>
                    <BurgerConstructor ingredients={ingredients}/>
                </div>
            </main>
        </div>
    );
}

export default App;
