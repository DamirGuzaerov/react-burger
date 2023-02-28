import React from 'react';
import './app.css';
import {AppHeader} from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {ingredients} from "../../utils/data"
function App() {
    return (
        <div className={'main-wrapper'}>
            <AppHeader/>
            <main className={'content'}>
                <BurgerIngredients ingredients={ingredients}/>
            </main>
        </div>
    );
}

export default App;
